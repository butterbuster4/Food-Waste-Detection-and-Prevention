package com.plt.grp05h5.service.impl;
import com.plt.grp05h5.web.dto.DepartmentRes;
import com.plt.grp05h5.service.DepartmentService;
import com.plt.grp05h5.service.UserDepartmentService;
import com.plt.grp05h5.service.dto.filters.AbstractQueryFilter;
import com.plt.grp05h5.service.dto.filters.atomic.ColumnQueryFilter;
import com.plt.grp05h5.service.dto.filters.atomic.ListLiteralQueryFilter;
import com.plt.grp05h5.service.dto.filters.logic.binary.compare.EqualQueryFilter;
import com.plt.grp05h5.web.dto.UserListResDTO;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.List;
import java.util.Stack;
import java.util.stream.Collectors;
import java.util.Collections;

/**
* auto generate UserRoleServiceImpl logic
* 权限下沉情况下 处理角色下用户逻辑
*
* @author sys
*/
@Service
public class UserDepartmentServiceImpl implements UserDepartmentService{

    private Logger log = LoggerFactory.getLogger(UserDepartmentServiceImpl.class);



    @Resource
    private DepartmentService departmentService;

    @Override
    public UserListResDTO getUserLevelNthUpDirectManager(String userId, Long level) {
    log.info("getUserLevelNthUpDirectManager start userId {} level {}",userId,level);
        if (level == null || level<=0){
            return null;
        }
        UserListResDTO resDTO = new UserListResDTO();
        return null;
    }
    // TODO 方法名命名
    @Override
    public UserListResDTO getUserLevelNthUpDeptManager(String userId, Long level) {
        log.info("getUserLevelNthUpDeptManager start userId {} level {}",userId,level);
        if (StringUtils.isBlank(userId)){
            return null;
        }
        if (level == null || level < 1){
            return null;
        }
        UserListResDTO resDTO = new UserListResDTO();
        return null;
    }

    @Override
    public UserListResDTO getUserLevelNthDeptManager(String userId, Long level) {
        log.info("getUserLevelNthDeptManager start userId {} level {}",userId,level);
        UserListResDTO userListResDTO = new UserListResDTO();
        if (level == null || level<1){
            return null;
        }
                                return null;
    }

    @Override
    public List<UserListResDTO> getDeptUsers(String deptId,Boolean managerOnly) {
        if (StringUtils.isBlank(deptId)){
            return Collections.emptyList();
        }
            return Collections.emptyList();
    }

        @Override
        public List<UserListResDTO> getUsersByUserName(String userName) {
                if (StringUtils.isBlank(userName)){
                    return Collections.emptyList();
                }
            return Collections.emptyList();
        }

}
