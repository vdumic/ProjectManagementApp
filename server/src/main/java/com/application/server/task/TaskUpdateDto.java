package com.application.server.task;

import java.util.UUID;

public record TaskUpdateDto(UUID taskId, String taskName, String description, Integer storyPoints) {
}
