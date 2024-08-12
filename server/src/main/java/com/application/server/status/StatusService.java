package com.application.server.status;

import org.springframework.stereotype.Service;

import java.util.Arrays;
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
        Status statusInDb = statusRepository.findAll().stream().filter(s -> s.getName().equalsIgnoreCase(status.getName())).findAny().orElse(null);

        if (statusInDb != null) {
            return statusInDb;
        } else {
            return statusRepository.save(status);
        }
    }

    public String deleteStatus(UUID id) {
        List<String> predefinedStatuses = Arrays.asList("In backlog", "In progress", "Done");
        Status status = statusRepository.findAll().stream().filter(s -> s.getId().equals(id)).findAny().orElse(null);

        if (status == null) {
            return "Status with defined id does not exist!";
        } else if (predefinedStatuses.contains(status.getName())) {
            return "Predefined statuses cannot be deleted!";
        }

        statusRepository.deleteById(id);
        return "Status successfully deleted!";
    }

    public String getStatusName(UUID statusId) {
        Status status = statusRepository.findById(statusId).orElse(null);
        if (status != null) {
            return status.getName();
        } else {
            return null;
        }
    }

    public UUID getStatusId(String statusName) {
        Status status = statusRepository.findAll().stream().filter(s -> s.getName().equals(statusName)).findAny().orElse(null);
        if (status != null) {
            return status.getId();
        } else {
            return null;
        }
    }
}
