package com.application.server.priority;

import org.springframework.stereotype.Service;

@Service
public class PriorityMapper {

    public PrioritiesListDto toPrioritiesListDto(Priority priority) {
        return new PrioritiesListDto(priority.getId(), priority.getName());
    }
}
