package com.application.server.project_status;

import jakarta.validation.constraints.NotEmpty;

public record ProjectStatusDto(@NotEmpty(message = "Project should be provided")
                               String projectId,

                               @NotEmpty(message = "Status should be provided")
                               String statusId
) {
}
