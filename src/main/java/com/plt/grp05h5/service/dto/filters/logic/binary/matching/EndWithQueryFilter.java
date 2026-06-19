package com.plt.grp05h5.service.dto.filters.logic.binary.matching;

import com.plt.grp05h5.service.dto.filters.logic.binary.BinaryExpressionFilter;
import com.plt.grp05h5.service.dto.filters.atomic.IdentifierQueryFilter;
import com.plt.grp05h5.service.dto.filters.atomic.StringLiteralQueryFilter;

/**
 * @Author: sys
 */
public class EndWithQueryFilter extends BinaryExpressionFilter {
    private static String CONCAT_END = "concat('%%', %s)";

    public EndWithQueryFilter() {
        this.operator = "endwith";
    }

    @Override
    public String sql(String dbType) {
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
        String likeString = String.format(CONCAT_END, right.sql(dbType));
        return String.format(" (%s LIKE %s ESCAPE '@') ", left.sql(dbType), likeString);
    }
}
