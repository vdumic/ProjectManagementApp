package com.application.server.status;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
public class StatusController {

    private final StatusService statusService;

    public StatusController(StatusService statusService) {
        this.statusService = statusService;
    }

    @GetMapping("/statuses")
    public List<Status> getAllStatuses() {
        return statusService.getAllStatuses();
    }

    @PostMapping("/statuses")
    public Status createStatus(@RequestBody Status status) {
        return statusService.createStatus(status);
    }

    @DeleteMapping("/statuses/{status-id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteStatus(@PathVariable("status-id") UUID id) {
        return statusService.deleteStatus(id);
    }
}
