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

    public UUID getRoleIdByName(String name) {
        Role role = roleRepository.findAll().stream().filter(r -> r.getName().equals(name)).findAny().orElse(null);
        return role.getId();
    }

    public Role createRole(Role role) {
        Role roleInDb = roleRepository.findAll().stream().filter(r -> r.getName().equals(role.getName())).findAny().orElse(null);

        if(roleInDb != null) {
            return roleInDb;
        } else {
            return roleRepository.save(role);
        }
    }

}
