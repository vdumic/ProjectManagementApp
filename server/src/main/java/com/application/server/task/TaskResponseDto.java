package com.application.server.task;

import java.util.Date;
import java.util.UUID;

public record TaskResponseDto(UUID taskId, String taskName, UUID createdById, String createdBy, UUID assignedToId,
                              String assignedTo, String description, Integer storyPoints, UUID projectId,
                              String projectName, UUID priorityId, String priorityName, UUID statusId,
                              String statusName, Date createdAt, Date updatedAt, Date startDate, Date endDate) {
}
