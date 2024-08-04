package com.application.server.project_status;

import jakarta.validation.constraints.NotEmpty;

import java.util.UUID;

public record ProjectStatusDto(@NotEmpty(message = "Project should be provided")
                               UUID projectId,

                               @NotEmpty(message = "Status should be provided")
                               UUID statusId
) {
}
