package com.application.server.project_status;

import java.util.UUID;

public record StatusesOnProjectResponseDto(String status, UUID statusId) {
}
