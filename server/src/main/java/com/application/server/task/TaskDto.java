package com.application.server.task;

import jakarta.validation.constraints.NotEmpty;

import java.sql.Date;
import java.util.UUID;

public record TaskDto(
        @NotEmpty(message = "User should be provided")
        UUID createdBy,
        @NotEmpty(message = "Task name should not be empty")
        String name,
        String description,
        Date createdAt,
        Date startDate,
        Date endDate,
        @NotEmpty(message = "Story points should not be empty")
        Integer storyPoints
) {
}
