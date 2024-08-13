package com.application.server.project;

import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

public record ProjectDto(
        @NotEmpty(message = "Project name should not be empty")
        String name,
        String description,

        @NotEmpty(message = "User should be provided")
        UUID createdBy
) {
}
