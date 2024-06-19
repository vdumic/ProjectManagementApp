package com.application.server.task;

import java.util.UUID;

public record TaskUpdatePriorityDto(UUID taskId, UUID userId, UUID priorityId) {
}
