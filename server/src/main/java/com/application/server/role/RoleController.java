package com.application.server.role;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
public class RoleController {

    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping("/roles")
    public List<Role> getAllRoles() {
        return roleService.getAllRoles();
    }

    @GetMapping("/roles_names")
    public List<RolesListDto> getAllRolesNames() {
        return roleService.getAllRolesNames();
    }

    @GetMapping("/roles/{role-id}")
    public Role getRoleById(@PathVariable("role-id") UUID id) {
        return roleService.getRoleById(id);
    }

    @PostMapping("/roles")
    public Role createRole(@RequestBody Role role) {
        return roleService.createRole(role);
    }

}
