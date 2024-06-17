package com.application.server.status;

import java.util.UUID;

public record StatusesListDto(UUID statusId, String statusName) {
}
