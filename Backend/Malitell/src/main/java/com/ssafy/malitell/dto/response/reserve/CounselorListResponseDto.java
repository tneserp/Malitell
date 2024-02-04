package com.ssafy.malitell.dto.response.reserve;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
public class CounselorListResponseDto {

    private int userSeq;
    private String name;
    private String email;
    private int age;
    private String gender;
    private String profileImg;
    private String professionalField;
    private int careerPeriod;
    private double grade;

}
