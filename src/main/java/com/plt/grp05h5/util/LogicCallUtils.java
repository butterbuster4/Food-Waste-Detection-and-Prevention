package com.plt.grp05h5.util;

import java.util.Objects;
import java.util.function.Supplier;
import java.util.List;
import java.util.Map;
import java.math.BigDecimal;
import com.plt.grp05h5.exception.*;
import com.netease.codewave.nasl.java.definition.error.BaseError;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LogicCallUtils {
    private static final Logger log = LoggerFactory.getLogger(LogicCallUtils.class);

    public static void setTransactionStatusRollbackOnly() {
        TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
    }

    //框架的类型推断机制会保证类型转换的正确性
    @SuppressWarnings("unchecked")
    public static <T> T callWithError(Supplier<Object> action, boolean handleError, String errorMessage, List<Class<?>> handleErrorTypes) {
        try {
            T t = (T) action.get();
            //如果返回Error类型，则抛出由框架处理
            if (t instanceof BaseError && !handleError) {
                BaseError baseError = (BaseError) t;
                baseError.setErrorMsg(StringUtils.isEmpty(errorMessage) ? baseError.getErrorMsg() : errorMessage);
                throw baseError;
            }
            return t;
        } catch (RuntimeException e) {
            //是否需要自定义异常信息
            //后续考虑增加前提条件为handleError=false，只有自动处理时才允许自定义异常信息 && !handleError
            boolean isCustomErrorMsg = StringUtils.isNotEmpty(errorMessage) ;
            errorMessage = isCustomErrorMsg ? errorMessage : (e instanceof BaseError ? ((BaseError)e).getErrorMsg() : e.getMessage());
            BaseError error = ErrorManager.convertException(e, errorMessage);
            BaseError finalError = matchFinalError(e, error, handleErrorTypes, errorMessage);
            if (Objects.nonNull(finalError)) {
                if (handleError) {
                    return (T) finalError;
                } else {
                    throw finalError;
                }
            } else {
                if (Objects.nonNull(error)){
                    throw error;
                }
                throw isCustomErrorMsg ? new RuntimeException(errorMessage, e) : e;
            }
        }
    }

    public static BaseError matchFinalError(Throwable e,BaseError error,List<Class<?>> handleErrorTypes, String errorMessage) {
        if (containsThisErrorType(handleErrorTypes, error)) {
            return error;
        } else if (containsNewErrorType(handleErrorTypes)) {
            return ErrorManager.ofError(errorMessage);
        } else if (containsOldErrorType(handleErrorTypes)) {
            return new com.plt.grp05h5.domain.ui.Error(e.getClass().getName(), errorMessage);
        }
        return null;
    }

    public static boolean containsThisErrorType(List<Class<?>> handleErrorTypes, Throwable e) {
        if (Objects.isNull(e) || CollectionUtils.isEmpty(handleErrorTypes)) return false;
        return handleErrorTypes.stream().anyMatch(eClass -> eClass.equals(e.getClass()));
    }

    public static boolean containsOldErrorType(List<Class<?>> handleErrorTypes) {
        if (CollectionUtils.isEmpty(handleErrorTypes)) return false;
        return handleErrorTypes.stream().anyMatch(eClass -> eClass.equals(com.plt.grp05h5.domain.ui.Error.class));
    }

    public static boolean containsNewErrorType(List<Class<?>> handleErrorTypes) {
        if (CollectionUtils.isEmpty(handleErrorTypes)) return false;
        return handleErrorTypes.stream().anyMatch(eClass -> eClass.equals(com.netease.codewave.nasl.java.definition.error.Error.class));
    }

    //框架的类型推断机制会保证类型转换的正确性
    @SuppressWarnings("unchecked")
    public static <T> T callWithInterfaceError(Supplier<Object> action, boolean handleError, String errorMessage) {
        try {
            return (T) action.get();
        } catch (RuntimeException e) {
            if (!handleError) {
                errorMessage = StringUtils.isEmpty(errorMessage) ? e.getMessage() : errorMessage;
                throw ErrorManager.ofInterfaceError(errorMessage);
            } else {
                if (e instanceof BaseError) {
                    return (T) e;
                }
                return (T) ErrorManager.ofInterfaceError(e.getMessage());
            }
        }
    }

    public static void abort() {
        throw new LcapAbortException();
    }

    public static <T> T fromDependenceType(Object obj) {
        Class<T> tClass = null;
        if (obj instanceof Integer) {
            tClass = (Class<T>) Long.class;
        } else if (obj instanceof Double) {
            tClass = (Class<T>) BigDecimal.class;
        } else if (obj instanceof List) {
            tClass = (Class<T>) List.class;
        } else if (obj instanceof Map) {
            tClass = (Class<T>) Map.class;
        }

        return fromDependenceType(obj, tClass);
    }

    public static <T> T fromDependenceType(Object obj, Class<T> tClass) {
        if (obj instanceof Integer) {
            return tClass.cast(((Integer) obj).longValue());
        } else if (obj instanceof Double) {
            return tClass.cast(new BigDecimal(((Double) obj)));
        } else if (obj instanceof DependenceArrayListWrapper) {
            DependenceArrayListWrapper listWrapper = (DependenceArrayListWrapper) obj;
            return (T) (listWrapper.isTargetDeprecatedType() ? new DependenceArrayListWrapper(listWrapper.target, true) : listWrapper.target);
        } else if (obj instanceof List) {
            return (T) new DependenceArrayListWrapper((List) obj, true);
        } else if (obj instanceof DependenceHashMapWrapper) {
             DependenceHashMapWrapper mapWrapper = (DependenceHashMapWrapper) obj;
             return (T) (mapWrapper.isTargetDeprecatedType() ? new DependenceHashMapWrapper<>(mapWrapper.target, true) : mapWrapper.target);
         } else if (obj instanceof Map) {
             return (T) new DependenceHashMapWrapper<>((Map) obj, true);
         }

        return (T) obj;
    }

    public static <T> T toDependenceType(Object obj) {
        Class<T> tClass = null;
        if (obj instanceof Long) {
            tClass = (Class<T>) Integer.class;
        } else if (obj instanceof BigDecimal) {
            tClass = (Class<T>) Double.class;
        } else if (obj instanceof List) {
            tClass = (Class<T>) List.class;
        } else if (obj instanceof Map) {
            tClass = (Class<T>) Map.class;
        }

        return toDependenceType(obj, tClass);
    }

    public static <T> T toDependenceType(Object obj, Class<T> tClass) {
        if (obj instanceof Long) {
            Long longValue = (Long) obj;
            precondition(longValue <= Integer.MAX_VALUE, "Out Of Integer Bounds: %s", obj);
            return tClass.cast(longValue.intValue());
        } else if (obj instanceof BigDecimal) {
            BigDecimal bigDecimalValue = (BigDecimal) obj;
            precondition(bigDecimalValue.compareTo(BigDecimal.valueOf(Double.MAX_VALUE)) <= 0, "Out Of Integer Bounds: %s", obj);
            return tClass.cast(bigDecimalValue.doubleValue());
        } else if (obj instanceof DependenceArrayListWrapper) {
            DependenceArrayListWrapper listWrapper = (DependenceArrayListWrapper) obj;
            return (T) (listWrapper.isTargetDeprecatedType() ? listWrapper.target : new DependenceArrayListWrapper(listWrapper.target, false));
        } else if (obj instanceof List) {
            return (T) new DependenceArrayListWrapper((List) obj, false);
        } else if (obj instanceof DependenceHashMapWrapper) {
             DependenceHashMapWrapper mapWrapper = (DependenceHashMapWrapper) obj;
             return (T) (mapWrapper.isTargetDeprecatedType() ? mapWrapper.target : new DependenceHashMapWrapper<>(mapWrapper.target, false));
         } else if (obj instanceof Map) {
             return (T) new DependenceHashMapWrapper<>((Map) obj, false);
         }

        return (T) obj;
    }

    private static void precondition(boolean condition, String msg, Object... args) {
        if (!condition) {
            throw new HttpCodeException(500, String.format(msg, args));
        }
    }
}
