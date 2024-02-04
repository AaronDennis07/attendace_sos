package com.aaron.server.application;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ApplicationRequest {
    private String reason;

    private String description;

    private String document;


    private Status status;

    private Integer days;


    private String remarks;
}
