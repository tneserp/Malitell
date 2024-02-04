package com.ssafy.malitell.repository.user;

import com.ssafy.malitell.domain.board.gathering.Gathering;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.response.reserve.CounselorListResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer>, UserRepositoryCustom {
    Boolean existsByUserId(String userId);
    User findByUserId(String userId);
    User findByUserSeq(int userSeq);
    User findIdByNameAndEmail(String name, String email);
}
