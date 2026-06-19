package com.plt.grp05h5.service.system.iam;

import com.plt.grp05h5.service.UserInfoService;
import com.plt.grp05h5.service.UserRoleService;
import com.plt.grp05h5.service.DepartmentService;
import com.plt.grp05h5.service.UserDepartmentService;
import com.plt.grp05h5.web.dto.*;
import com.netease.codewave.domain.iam.api.account.IAccountService;
import com.netease.codewave.domain.iam.api.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * 账号组织系统服务
 */
@Service
public class AccountServiceImpl implements IAccountService {
    @Resource
    UserInfoService userInfoService;
    @Resource
    private UserRoleService userRoleService;
    @Resource
    private DepartmentService departmentService;
    @Resource
    private UserDepartmentService userDepartmentService;

    @Override
    public List<Role> getRoleList(RoleQuery roleListQuery) {
        RoleListReqDTO roleListReqDTO = new RoleListReqDTO();
        roleListReqDTO.setRoleName(roleListQuery.getRoleName());
        roleListReqDTO.setLimit(Math.toIntExact(roleListQuery.getPageSize()));
        roleListReqDTO.setOffset((int) ((roleListQuery.getPageIndex()  - 1 )* roleListQuery.getPageSize()));
        List<RoleListResDTO> roleListResDTOList = userRoleService.getRoleList(roleListReqDTO);
        return roleListResDTOList.stream().map(roleListResDTO -> {
            Role role = new Role();
            role.setRoleId(roleListResDTO.getRoleId());
            role.setRoleName(roleListResDTO.getRoleName());
            return role;
        }).collect(Collectors.toList());
    }

    @Override
    public Page<User> getUserPage(UserQuery query) {
        return userInfoService.getUserPage(query);
    }

    @Override
    public List<User> getUsersByUserName(String userName) {
        List<UserListResDTO> userListResDTOS = userDepartmentService.getUsersByUserName(userName);
        return convertUserListRes2UserList(userListResDTOS);
    }

    @Override
    public List<User> getUserList(UserQuery query) {
        UserListReqDTO userListReqDTO = new UserListReqDTO();
        userListReqDTO.setLimit(Math.toIntExact(query.getPageSize()));
        userListReqDTO.setOffset((int) ((query.getPageIndex()  - 1 )* query.getPageSize()));
        userListReqDTO.setUserNameFilter(query.getUserName());
        List<UserListResDTO> userListResDTOS = userInfoService.getUserListFromAppOrNuims(userListReqDTO);
        return convertUserListRes2UserList(userListResDTOS);
    }

    @Override
    public List<User> getDeptUsers(String deptId, Boolean managerOnly) {
        List<UserListResDTO> userListResDTOS = userDepartmentService.getDeptUsers(deptId, managerOnly);
        return convertUserListRes2UserList(userListResDTOS);
    }

    @Override
    public List<Department> getDepartments(String deptName) {
        List<DepartmentRes> departmentResList = departmentService.getDepartments(deptName);
        return convertDepartmentRes2Department(departmentResList);
    }


    @Override
    public List<User> getUserListByRoleId(String roleId) {
        List<UserListResDTO> userListResDTOS = userRoleService.getCompleteUserListByRoleName(roleId);
        return convertUserListRes2UserList(userListResDTOS);
    }

    @Override
    public User getUserLevelNthUpDeptManager(String userId, Long level) {
        UserListResDTO userListResDTO = userDepartmentService.getUserLevelNthUpDeptManager(userId, level);
        return convertUserListRes2User(userListResDTO);
    }

    @Override
    public User getUserLevelNthDeptManager(String userId, Long level) {
        UserListResDTO userListResDTO = userDepartmentService.getUserLevelNthDeptManager(userId, level);
        return convertUserListRes2User(userListResDTO);
    }

    @Override
    public User getUserLevelNthUpDirectManager(String userId, Long level) {
        UserListResDTO userListResDTO = userDepartmentService.getUserLevelNthUpDirectManager(userId, level);
        return convertUserListRes2User(userListResDTO);
    }

    private List<Department> convertDepartmentRes2Department(List<DepartmentRes> departmentResList) {
        if (CollectionUtils.isEmpty(departmentResList)) {
            return new ArrayList<>();
        }
        return departmentResList.stream().map(departmentRes -> {
            Department department = new Department();
            department.setDeptId(departmentRes.getDeptId());
            department.setName(departmentRes.getName());
            department.setParentDeptId(departmentRes.getParentDeptId());
            return department;
        }).collect(Collectors.toList());
    }

    private User convertUserListRes2User(UserListResDTO userListResDTO) {
        User user = new User();
        if(Objects.nonNull(userListResDTO)){
            user.setUserName(userListResDTO.getUserName());
            user.setUserId(userListResDTO.getUserId());
            user.setSource(userListResDTO.getSource());
            user.setDisplayName(userListResDTO.getDisplayName());
        }
        return user;
    }

    private List<User> convertUserListRes2UserList(List<UserListResDTO> userListResDTOS) {
        if (CollectionUtils.isEmpty(userListResDTOS)) {
            return new ArrayList<>();
        }
        return userListResDTOS.stream().map(this::convertUserListRes2User).collect(Collectors.toList());
    }

}
