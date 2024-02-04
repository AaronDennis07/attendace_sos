package com.aaron.server.student;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class StudentRequest{
    private String USN;
    private String department;
    private String section;
    private Integer semester;
    private String name;
    private String email;
}
