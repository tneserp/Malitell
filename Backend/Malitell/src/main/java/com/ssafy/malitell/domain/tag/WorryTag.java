package com.ssafy.malitell.domain.tag;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class WorryTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int worryTagSeq;
    private String tag;

    public WorryTag(String tag) {
        this.tag = tag;
    }
}
