package com.application.server.project;

import java.util.UUID;

public record ProjectUpdateDto(UUID projectId, UUID userId, String name, String description) {
}
