package com.plt.grp05h5.service.impl;
import com.plt.grp05h5.service.DepartmentService;
import com.plt.grp05h5.web.dto.DepartmentRes;
import com.plt.grp05h5.service.dto.filters.AbstractQueryFilter;
import com.plt.grp05h5.service.dto.filters.atomic.ColumnQueryFilter;
import com.plt.grp05h5.service.dto.filters.atomic.ListLiteralQueryFilter;
import com.plt.grp05h5.service.dto.filters.logic.binary.matching.LikeQueryFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.apache.commons.lang3.StringUtils;
import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Collections;

/**
* auto generate UserRoleServiceImpl logic
* 权限下沉情况下 处理角色下用户逻辑
*
* @author sys
*/
@Service
public class DepartmentServiceImpl implements DepartmentService {

    private Logger log = LoggerFactory.getLogger(DepartmentServiceImpl.class);
    @Override
    public List<DepartmentRes> getSubDeptList(String deptId) {
        log.info("query dept deptId {}",deptId);
         return Collections.emptyList();
    }

    @Override
    public DepartmentRes queryByDeptId(String deptId) {
        return null;
    }

    @Override
    public List<DepartmentRes> getDepartments(String name) {
        return Collections.emptyList();
    }
}