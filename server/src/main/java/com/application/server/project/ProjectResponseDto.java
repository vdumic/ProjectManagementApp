package com.application.server.project;

import java.util.Date;
import java.util.UUID;

public record ProjectResponseDto(UUID projectId, String projectName, String description, UUID userId, String userName,
                                 Date createdAt, Date updatedAt, boolean active) {
}
