package com.application.server.project;

import jakarta.validation.constraints.NotEmpty;

public record ProjectDto(
        @NotEmpty(message = "Project name should not be empty")
        String name,
        String description
) {
}
