package com.application.server.priority;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PriorityController {

    private final PriorityService priorityService;

    public PriorityController(PriorityService priorityService) {
        this.priorityService = priorityService;
    }

    @GetMapping("/priorities")
    public List<Priority> getAllPriorities() {
        return priorityService.getAllPriorities();
    }

    @PostMapping("/priorities")
    public Priority createPriority(@RequestBody Priority priority) {
        return priorityService.createPriority(priority);
    }

}
