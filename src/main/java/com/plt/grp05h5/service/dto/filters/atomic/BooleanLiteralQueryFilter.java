package com.plt.grp05h5.service.dto.filters.atomic;

import com.plt.grp05h5.config.Constants;
import com.plt.grp05h5.domain.enumeration.ErrorCodeEnum;
import com.plt.grp05h5.exception.HttpCodeException;
import com.plt.grp05h5.service.dto.filters.AbstractQueryFilter;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;

/**
 * @Author: sys
 */
public class BooleanLiteralQueryFilter extends AbstractQueryFilter {

    private Boolean value;

    public BooleanLiteralQueryFilter() {
        this.concept = "BooleanLiteral";
    }

    public BooleanLiteralQueryFilter(Boolean value) {
        this();
        this.value = value;
    }

    public Boolean getValue() {
        return value;
    }

    public void setValue(Boolean value) {
        this.value = value;
    }

    @Override
    public String sql(String dbType) {
        return QUESTION_MARK;
    }
}
