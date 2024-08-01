package com.application.server;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class DummyController {

    @GetMapping("/dummy")
    public ResponseEntity<List<String>> dummyData() {
        return ResponseEntity.ok(Arrays.asList("first", "second"));
    }
}
