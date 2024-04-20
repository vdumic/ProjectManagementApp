package com.application.server.role;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class RoleService {

    private final RoleRepository roleRepository;
    private final RoleMapper roleMapper;

    public RoleService(RoleRepository roleRepository, RoleMapper roleMapper) {
        this.roleRepository = roleRepository;
        this.roleMapper = roleMapper;
    }

    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    public List<RolesListDto> getAllRolesNames() {
        return roleRepository.findAll().stream().map(roleMapper::toRolesListDto).collect(Collectors.toList());
    }

    public Role getRoleById(UUID id) {
        return roleRepository.findById(id).orElse(null);
    }

    public Role createRole(Role role) {
        return roleRepository.save(role);
    }

    public void deleteRole(UUID id) {
        roleRepository.deleteById(id);
    }
}
