package com.application.server.project_status;

import java.util.UUID;

public record ProjectStatusNameDto(
        UUID projectId,
        String statusName
) {
}
