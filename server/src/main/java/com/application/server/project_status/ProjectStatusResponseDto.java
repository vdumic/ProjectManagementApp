package com.application.server.project_status;

import java.util.UUID;

public record ProjectStatusResponseDto(UUID projectId, String projectName, UUID statusId, String statusName) {
}
