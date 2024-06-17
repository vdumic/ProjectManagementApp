package com.application.server.on_project;

import java.util.UUID;

public record OnProjectResponseDto(UUID projectId, String projectName, UUID userId, String userName, UUID roleId,
                                   String roleName) {
}
