package com.ssafy.malitell.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; // idx
    private String userId; // 아이디
    private String name; // 이름
    private String nickname; // 닉네임
    private String password; // 비밀번호
    private String email; // 이메일
    private String phone; // 핸드폰 번호
    private String birth; // 생년월일
    private String role; // 권한 (counselor, client, admin)

}
