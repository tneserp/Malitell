package com.ssafy.malitell.controller;

import com.ssafy.malitell.dto.JoinDTO;
import com.ssafy.malitell.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/join")
    public String join(@RequestBody JoinDTO joinDTO) {
        userService.join(joinDTO);

        return "join success";
    }

    @GetMapping("/mypage")
    public String mypage() {
        return "mypage";
    }

}
