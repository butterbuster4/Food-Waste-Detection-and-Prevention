package com.plt.grp05h5.service.dto.filters.logic.binary.matching;

import com.plt.grp05h5.config.Constants;
import com.plt.grp05h5.domain.enumeration.ErrorCodeEnum;
import com.plt.grp05h5.exception.HttpCodeException;
import com.plt.grp05h5.service.dto.filters.logic.binary.BinaryExpressionFilter;
import com.plt.grp05h5.service.dto.filters.atomic.IdentifierQueryFilter;
import com.plt.grp05h5.service.dto.filters.atomic.StringLiteralQueryFilter;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;

/**
 * @Author: sys
 */
public class LikeQueryFilter extends BinaryExpressionFilter {

    public LikeQueryFilter() {
        this.operator = "like";
    }

    @Override
    public String sql(String dbType) {
        dbType = StringUtils.defaultString(dbType, "");
        String likeString = "";
        if (right instanceof IdentifierQueryFilter && ((IdentifierQueryFilter) right).getValue() instanceof String) {
            // 处理变量的通配符注入问题
            IdentifierQueryFilter identifierQueryFilter = (IdentifierQueryFilter) right;
            identifierQueryFilter.setValue(((String) ((IdentifierQueryFilter) right).getValue())
                    .replace("@", "@@")
                    .replace("%", "@%")
                    .replace("_", "@_")
                    .replace("\\", "@\\")
                    .replace("[", "@["));
        } else if (right instanceof StringLiteralQueryFilter) {
            // 处理常量的通配符注入问题
            StringLiteralQueryFilter stringLiteralQueryFilter = (StringLiteralQueryFilter) right;
            stringLiteralQueryFilter.setValue(stringLiteralQueryFilter.getValue()
                    .replace("@", "@@")
                    .replace("%", "@%")
                    .replace("_", "@_")
                    .replace("\\", "@\\")
                    .replace("[", "@["));
        }
        switch (dbType) {
            case "mysql":
                likeString = StringUtils.replace("concat('%', concat(%s, '%'))", "%s", right.sql(dbType));
                return String.format(" (%s LIKE %s ESCAPE '@') ", left.sql(dbType), likeString);
            default:
                throw new HttpCodeException(HttpStatus.METHOD_NOT_ALLOWED.value(), ErrorCodeEnum.DB_TYPE_NOT_SUPPORT.code);
        }
    }
}
