package com.application.server.project;

import jakarta.validation.constraints.NotEmpty;

import java.sql.Date;

public record ProjectDto(
        @NotEmpty(message = "Project name should not be empty")
        String name,
        String description,
        Date createdAt
) {
}
