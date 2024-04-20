package com.application.server.status;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class StatusService {

    private final StatusRepository statusRepository;
    private final StatusMapper statusMapper;

    public StatusService(StatusRepository statusRepository, StatusMapper statusMapper) {
        this.statusRepository = statusRepository;
        this.statusMapper = statusMapper;
    }

    public List<Status> getAllStatuses() {
        return statusRepository.findAll();
    }

    public List<StatusesListDto> getAllStatusesNames() {
        return statusRepository.findAll().stream().map(statusMapper::toStatusesListDto).collect(Collectors.toList());
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
