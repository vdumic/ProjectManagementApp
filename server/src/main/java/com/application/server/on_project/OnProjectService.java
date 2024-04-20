package com.application.server.on_project;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OnProjectService {

    private final OnProjectRepository onProjectRepository;
    private final OnProjectMapper onProjectMapper;

    public OnProjectService(OnProjectRepository onProjectRepository, OnProjectMapper onProjectMapper) {
        this.onProjectRepository = onProjectRepository;
        this.onProjectMapper = onProjectMapper;
    }

    public List<OnProjectResponseDto> getAllOnProject() {
        return onProjectRepository.findAll().stream().map(onProjectMapper::toOnProjectResponseDto).collect(Collectors.toList());
    }

    public OnProjectResponseDto createOnProject(OnProjectDto onProjectDto) {
        var onProject = onProjectMapper.toOnProject(onProjectDto);
        return onProjectMapper.toOnProjectResponseDto(onProjectRepository.save(onProject));
    }
}
