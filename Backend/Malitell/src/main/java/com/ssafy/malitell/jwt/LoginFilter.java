package com.ssafy.malitell.jwt;

import com.ssafy.malitell.dto.CustomUserDetails;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;
import java.util.Collection;
import java.util.Iterator;

/**
 * 커스텀 UsernamePasswordAuthentication 필터 작성
 * 로그인 요청이 들어오면 로그인 필터에서 가로챔
 */

public class LoginFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final JWTUtil jwtUtil;

    public LoginFilter(AuthenticationManager authenticationManager, JWTUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        // 클라이언트 요청에서 아이디랑 비밀번호 추출
        String userId = obtainUsername(request);
        String password = obtainPassword(request);

        // 로그인 필터가 가로챈 요청 정보 확인
        System.out.println("로그인 필터가 가로챈 요청 정보 확인");
        System.out.println("아이디 : " + userId);
        System.out.println("비밀번호 : " + password);

        // 스프링 시큐리티에서 아이디와 비밀번호를 검증하기 위해서는 token에 담아야 함
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userId, password, null);

        // token에 담은 데이터를 검증을 위해 AuthenticationManager로 전달
        return authenticationManager.authenticate(authToken);
    }

    // 로그인 성공시 실행하는 메소드 (여기서 JWT를 발급하면 됨)
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) throws IOException, ServletException {

        System.out.println("JWT 발급 해주자!!");

        // 로그인 성공 -> 로그인한 유저의 정보를 가지고 JWT 발급

        // getPrincipal() : 현재 사용자 정보 가져오기
        CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();

        String userId = customUserDetails.getUsername(); // 아이디

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iterator = authorities.iterator();
        GrantedAuthority auth = iterator.next();
        String role = auth.getAuthority(); // 권한

        // 사용자 아이디, 권한 토큰 유효시간 입력해서 JWT 발급
        // 토큰 유효시간 ex. 60*60*1000L (단위:ms) -> 1시간
        String token = jwtUtil.createJWT(userId, role, 60*60*10L);

        // Bearer 인증 방식
        // 응답 헤더에 JWT 토큰 값을 넣어 응답
        // 응답 헤더에서 "Authorization" key 값에 "Bearer ~~" 값을 확인할 수 있음 (JWT)
        response.addHeader("Authorization", "Bearer " + token);
    }

    // 로그인 실패시 실행하는 메소드
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
        // 로그인 실패 시 401 응답 (Unauthorized)
        response.setStatus(401);
    }
}
