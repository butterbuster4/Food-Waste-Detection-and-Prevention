package com.plt.grp05h5.service.dto.filters.logic.binary.compare;

import com.plt.grp05h5.service.dto.filters.logic.binary.BinaryExpressionFilter;

/**
 * @Author: sys
 */
public class NgtQueryFilter extends BinaryExpressionFilter {


    public NgtQueryFilter() {
        this.operator = "<=";
    }

    @Override
    public String sql(String dbType) {
        return String.format(" (%s <= %s) ", left.sql(dbType), right.sql(dbType));
    }
}
