package com.application.server.status;

import org.springframework.stereotype.Service;

@Service
public class StatusMapper {

    public StatusesListDto toStatusesListDto(Status status) {
        return new StatusesListDto(status.getName());
    }
}
