package com.application.server.user;

import java.util.UUID;

public record UsersListDto(UUID id, String email, String firstname, String lastname, String role) {
}
