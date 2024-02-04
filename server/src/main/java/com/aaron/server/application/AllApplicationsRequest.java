package com.aaron.server.application;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Builder
public class AllApplicationsRequest {
    private final Integer id;
    private final Status status;

}
