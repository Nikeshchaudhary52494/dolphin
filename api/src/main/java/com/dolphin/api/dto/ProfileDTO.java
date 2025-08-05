package com.dolphin.api.dto;

import java.time.Instant;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProfileDTO {

    private String id;
    private String clerkId;
    private String email;
    private String firstName;
    private String lastName;
    private Integer credit;
    private String profileImage;
    private Instant createdAt;

}
