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

    public Priority getPriorityById(UUID id) {
        return priorityRepository.findById(id).orElse(null);
    }

    public Priority createPriority(Priority priority) {
        return priorityRepository.save(priority);
    }

    public void deletePriorty(UUID id) {
        priorityRepository.deleteById(id);
    }
}
