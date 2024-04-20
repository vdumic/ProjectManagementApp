package com.application.server.on_project;

import jakarta.validation.constraints.NotEmpty;

public record OnProjectDto(
        @NotEmpty(message = "User should be provided")
        String userId,
        @NotEmpty(message = "Project should be provided")
        String projectId,
        @NotEmpty(message = "Role for user should be provided")
        String roleId
) {
}
