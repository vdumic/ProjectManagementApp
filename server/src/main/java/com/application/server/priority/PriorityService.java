package com.application.server.priority;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PriorityService {

    private final PriorityRepository priorityRepository;

    public PriorityService(PriorityRepository priorityRepository) {
        this.priorityRepository = priorityRepository;
    }

    public List<Priority> getAllPriorities() {
        return priorityRepository.findAll();
    }

    public Priority createPriority(Priority priority) {
        Priority priorityInDb = priorityRepository.findAll().stream().filter(p -> p.getName().equals(priority.getName())).findAny().orElse(null);

        if (priorityInDb != null) {
            return priorityInDb;
        } else {
            return priorityRepository.save(priority);
        }
    }

    public String getPriorityName(UUID priorityId) {
        Priority priority = priorityRepository.findById(priorityId).orElse(null);

        return priority.getName();
    }

}
