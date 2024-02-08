package com.ssafy.malitell.dto.response.board.gathering;

import com.ssafy.malitell.domain.board.Gathering;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;


@NoArgsConstructor
@AllArgsConstructor
@Getter
public class GatheringListResponseDto {
    // 제목
    private String title;

    // 작성자 닉네임
    private String username;
    private int hit;
    private Timestamp time;
    private int gatheringSeq;
    // 태그
    private String tag;

    public GatheringListResponseDto(Gathering gathering) {
        this.title = gathering.getTitle();
        this.username = gathering.getUser().getName();
        this.hit = gathering.getHit();
        this.time = gathering.getTime();
        this.gatheringSeq = gathering.getGatheringSeq();
        this.tag = gathering.getWorryTag().getTag();
    }
}
