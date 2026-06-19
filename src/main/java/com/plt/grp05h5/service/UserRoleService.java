package com.plt.grp05h5.service;

import java.util.List;
import com.plt.grp05h5.web.dto.RoleListReqDTO;
import com.plt.grp05h5.web.dto.RoleListResDTO;
import com.plt.grp05h5.web.dto.UserListResDTO;

/**
* auto generate UserRoleService logic
*
* @author sys
*/
public interface UserRoleService {
    /**
     * 根据角色名称获取其下的用户名称列表
     *
     * @param roleName 角色名称
     * @return 用户名称集合
     */
    List<String> getUserListByRoleName(String roleName);

    /**
    * 根据角色名称获取其下的完整用户信息列表
    *
    * @param roleName 角色名称
    * @return 用户集合
    */
    List<UserListResDTO> getCompleteUserListByRoleName(String roleName);


    /**
     * 根据角色条件查询角色列表
     *
     * @param query 查询角色的条件
     * @return RoleListResDTO 角色集合
     */
    List<RoleListResDTO> getRoleList(RoleListReqDTO query);
}
