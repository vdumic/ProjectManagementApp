package com.application.server.role;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class RoleService {

    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    public UUID getRoleIdByName(String name) {
        Role role = roleRepository.findAll().stream().filter(r -> r.getName().equals(name)).findAny().orElse(null);
        return role.getId();
    }

    public Role createRole(Role role) {
        Role roleInDb = roleRepository.findAll().stream().filter(r -> r.getName().equals(role.getName())).findAny().orElse(null);

        if (roleInDb != null) {
            return roleInDb;
        } else {
            return roleRepository.save(role);
        }
    }

}
