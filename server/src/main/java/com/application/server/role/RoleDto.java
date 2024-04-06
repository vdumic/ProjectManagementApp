package com.application.server.role;

import jakarta.validation.constraints.NotEmpty;

public record RoleDto(
        @NotEmpty(message = "Role name should not be empty")
        String name
) {
}
