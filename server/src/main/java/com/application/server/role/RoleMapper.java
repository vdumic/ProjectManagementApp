package com.application.server.role;

import org.springframework.stereotype.Service;

@Service
public class RoleMapper {
    public RolesListDto toRolesListDto(Role role) {
        return new RolesListDto(role.getId(), role.getName());
    }
}
