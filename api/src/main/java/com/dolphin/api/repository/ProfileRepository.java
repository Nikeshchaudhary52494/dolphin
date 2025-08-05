package com.dolphin.api.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.dolphin.api.documents.Profile;

@Repository
public interface ProfileRepository extends MongoRepository<Profile, String> {
    Optional<Profile> findByEmail(String email);

    Profile findByClerkId(String clerkId);

    Boolean existsByClerkId(String clerkId);
}
