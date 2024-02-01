package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.auth.CertificationEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificationRepository extends JpaRepository<CertificationEntity, String> {

    CertificationEntity findByUserId(String userId);

    @Transactional
    void deleteByUserId(String userId);
}
