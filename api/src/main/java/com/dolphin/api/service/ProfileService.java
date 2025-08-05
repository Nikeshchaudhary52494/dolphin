package com.dolphin.api.service;

import java.time.Instant;

import org.springframework.stereotype.Service;

import com.dolphin.api.documents.Profile;
import com.dolphin.api.dto.ProfileDTO;
import com.dolphin.api.repository.ProfileRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProfileService {

    private final ProfileRepository profileRepository;

    public ProfileDTO createProfile(ProfileDTO profileDTO) {

        if (profileRepository.existsByClerkId(profileDTO.getClerkId())) {
            return updateProfile(profileDTO);

        }

        Profile profile = Profile.builder()
                .clerkId(profileDTO.getClerkId())
                .email(profileDTO.getEmail())
                .firstName(profileDTO.getFirstName())
                .lastName(profileDTO.getLastName())
                .credit(5)
                .createdAt(Instant.now())
                .profileImage(profileDTO.getProfileImage())
                .build();

        profile = profileRepository.save(profile);

        return ProfileDTO.builder()
                .id(profile.getId())
                .clerkId(profile.getClerkId())
                .email(profile.getEmail())
                .firstName(profile.getFirstName())
                .lastName(profile.getLastName())
                .credit(profile.getCredit())
                .profileImage(profile.getProfileImage())
                .createdAt(profile.getCreatedAt())
                .build();
    }

    public ProfileDTO updateProfile(ProfileDTO profileDTO) {
        Profile existingProfile = profileRepository.findByClerkId(profileDTO.getClerkId());

        if (existingProfile != null) {
            if (profileDTO.getEmail() != null && !profileDTO.getEmail().isEmpty()) {
                existingProfile.setEmail(profileDTO.getEmail());
            }
            if (profileDTO.getFirstName() != null && !profileDTO.getFirstName().isEmpty()) {
                existingProfile.setFirstName(profileDTO.getFirstName());
            }

            if (profileDTO.getLastName() != null && !profileDTO.getLastName().isEmpty()) {
                existingProfile.setLastName(profileDTO.getLastName());
            }

            if (profileDTO.getProfileImage() != null && !profileDTO.getProfileImage().isEmpty()) {
                existingProfile.setProfileImage(profileDTO.getProfileImage());
            }

            Profile updatedProfile = profileRepository.save(existingProfile);

            return ProfileDTO.builder()
                    .id(updatedProfile.getId())
                    .clerkId(updatedProfile.getClerkId())
                    .email(updatedProfile.getEmail())
                    .firstName(updatedProfile.getFirstName())
                    .lastName(updatedProfile.getLastName())
                    .credit(updatedProfile.getCredit())
                    .profileImage(updatedProfile.getProfileImage())
                    .createdAt(updatedProfile.getCreatedAt())
                    .build();
        }
        return null;
    }

    public boolean existsByClerkId(String clerkId) {
        return profileRepository.existsByClerkId(clerkId);
    }

    public void deleteProfile(String clerkId) {
        Profile existingProfile = profileRepository.findByClerkId(clerkId);
        if (existingProfile != null) {
            profileRepository.delete(existingProfile);
        }
    }

}
