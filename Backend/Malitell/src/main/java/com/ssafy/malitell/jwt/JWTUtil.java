package com.ssafy.malitell.jwt;

import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Date;

// JWT 발급과 검증에 필요한 메서드를 제공하는 클래스
@Component
public class JWTUtil {

    private final SecretKey secretKey; // JWT 암호화 키

    public JWTUtil(@Value("${spring.jwt.secret}") String secret) {
        this.secretKey = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), Jwts.SIG.HS256.key().build().getAlgorithm());
    }

    // JWT 검증에 필요한 메서드들
    public String getUserId(String token) {
        // jwt parser를 이용하고 secretKey를 이용하여 검증
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("username", String.class);
    }

    public String getRole(String token) {
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("role", String.class);
    }

    public boolean isExpired(String token) {
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().getExpiration().before(new Date());
    }

    // JWT 생성 메서드
    public String createJWT(String userId, String role, Long expiredMs) {
        return Jwts.builder()
                .claim("userId", userId)
                .claim("role", role)
                .issuedAt(new Date(System.currentTimeMillis())) // 토큰 발행시간
                .expiration(new Date(System.currentTimeMillis() + expiredMs)) // 토큰 만료기간
                .signWith(secretKey) // 최종적으로 secretKey를 통해 토큰 암호화
                .compact();
    }

}
