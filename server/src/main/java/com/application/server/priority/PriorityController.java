package com.application.server.priority;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class PriorityController {

    private final PriorityService priorityService;

    public PriorityController(PriorityService priorityService) {
        this.priorityService = priorityService;
    }

    @GetMapping("/priorities")
    public List<Priority> getAllPriorities() {
        return priorityService.getAllPriorities();
    }

    @GetMapping("/priorities_names")
    public List<PrioritiesListDto> getAllPrioritiesNames() {
        return priorityService.getAllPrioritiesNames();
    }

    @GetMapping("/priorities/{priority-id}")
    public Priority getPriorityById(@PathVariable("priority-id") UUID id) {
        return priorityService.getPriorityById(id);
    }

    @PostMapping("/priorities")
    public Priority createPriority(@RequestBody Priority priority) {
        return priorityService.createPriority(priority);
    }

    @DeleteMapping("/priorities/{priority-id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletePriority(@PathVariable("priority-id") UUID id) {
        priorityService.deletePriority(id);
    }
}
