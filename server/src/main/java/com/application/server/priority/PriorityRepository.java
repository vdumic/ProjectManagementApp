package com.application.server.priority;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PriorityRepository extends JpaRepository<Priority, UUID> {
}
