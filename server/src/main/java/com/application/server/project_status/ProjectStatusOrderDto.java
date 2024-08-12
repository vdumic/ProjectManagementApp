package com.application.server.project_status;

import java.util.List;
import java.util.UUID;

public record ProjectStatusOrderDto(UUID projectId, List<UUID> statusOrder) {
}
