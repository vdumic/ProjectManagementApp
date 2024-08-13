package com.application.server.on_project;

import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

public record OnProjectDto(@NotEmpty(message = "User should be provided") UUID userId,
                           @NotEmpty(message = "Project should be provided") UUID projectId,
                           @NotEmpty(message = "Role for user should be provided") UUID roleId) {
}
