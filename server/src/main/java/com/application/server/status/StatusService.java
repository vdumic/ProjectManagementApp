package com.application.server.status;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class StatusService {

    private final StatusRepository statusRepository;

    public StatusService(StatusRepository statusRepository) {
        this.statusRepository = statusRepository;
    }

    public List<Status> getAllStatuses() {
        return statusRepository.findAll();
    }

    public Status getStatusById(UUID id) {
        return statusRepository.findById(id).orElse(null);
    }

    public Status createStatus(Status status) {
        return statusRepository.save(status);
    }

    public void deleteStatus(UUID id) {
        statusRepository.deleteById(id);
    }
}
