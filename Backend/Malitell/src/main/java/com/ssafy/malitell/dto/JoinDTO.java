package com.ssafy.malitell.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.RequestBody;

@Setter
@Getter
public class JoinDTO {
    private String userId; // 아이디
    private String name; // 이름
    private String nickname; // 닉네임
    private String password; // 비밀번호
    private String email; // 이메일
    private String phone; // 핸드폰 번호
    private String birth; // 생년월일
    private String role; // 권한 (counselor, client, admin)
}
