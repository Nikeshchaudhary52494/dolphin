package com.dolphin.api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dolphin.api.dto.ProfileDTO;
import com.dolphin.api.service.ProfileService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class ProfileController {

    private final ProfileService profileService;

    @PostMapping("/register")
    public ResponseEntity<?> registerProfile(@RequestBody ProfileDTO profileDTO) {
        boolean exists = profileService.existsByClerkId(profileDTO.getClerkId());

        ProfileDTO savedProfile = profileService.createProfile(profileDTO);

        HttpStatus status = exists ? HttpStatus.OK : HttpStatus.CREATED;
        return ResponseEntity.status(status).body(savedProfile);
    }

}
