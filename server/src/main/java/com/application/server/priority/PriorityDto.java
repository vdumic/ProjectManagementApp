package com.application.server.priority;

import jakarta.validation.constraints.NotEmpty;

public record PriorityDto(
        @NotEmpty(message = "Priority name should not be empty")
        String name
) {
}
