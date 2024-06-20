package com.application.server.task;

import java.util.UUID;

public record TaskUpdateAsigneeDto(UUID taskId, UUID userId) {
}
