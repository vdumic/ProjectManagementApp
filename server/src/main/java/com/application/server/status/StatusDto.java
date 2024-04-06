package com.application.server.status;

import jakarta.validation.constraints.NotEmpty;

public record StatusDto(
        @NotEmpty(message = "Status name should not be empty")
        String name
) {
}
