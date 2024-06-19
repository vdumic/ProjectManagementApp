package com.application.server.task;

import java.util.UUID;

public record TaskUpdateStatusDto(UUID taskId, UUID statusId) {

}
