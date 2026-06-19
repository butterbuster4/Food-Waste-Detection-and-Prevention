package com.plt.grp05h5.service.dto.filters.atomic;

import com.plt.grp05h5.service.dto.filters.AbstractQueryFilter;


/**
 * @Author: sys
 */
public class NullLiteralQueryFilter extends AbstractQueryFilter {

    public NullLiteralQueryFilter() {
        this.concept = "NullLiteral";
    }

    @Override
    public String sql(String dbType) {
        return NULL_STRING;
    }
}
