package com.application.server.priority;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class PriorityService {

    private final PriorityRepository priorityRepository;
    private final PriorityMapper priorityMapper;

    public PriorityService(PriorityRepository priorityRepository, PriorityMapper priorityMapper) {
        this.priorityRepository = priorityRepository;
        this.priorityMapper = priorityMapper;
    }

    public List<Priority> getAllPriorities() {
        return priorityRepository.findAll();
    }

    public List<PrioritiesListDto> getAllPrioritiesNames() {
        return priorityRepository.findAll().stream().map(priorityMapper::toPrioritiesListDto).collect(Collectors.toList());
    }

    public Priority getPriorityById(UUID id) {
        return priorityRepository.findById(id).orElse(null);
    }

    public Priority createPriority(Priority priority) {
        return priorityRepository.save(priority);
    }

    public void deletePriority(UUID id) {
        priorityRepository.deleteById(id);
    }
}
