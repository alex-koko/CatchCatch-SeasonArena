package com.catchcatchrank.domains.rank;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import com.catchcatchrank.domains.rank.adapter.out.kafka.KafkaRankEntity;
import com.catchcatchrank.domains.rank.adapter.out.redis.RankRepositoryAdapter;
import com.catchcatchrank.domains.rank.application.service.SaveRankServiceImpl;
import com.catchcatchrank.domains.rank.domain.Rank;

@ExtendWith(MockitoExtension.class)
public class SaveRankServiceTest {

	@InjectMocks
	private SaveRankServiceImpl saveRankService;

	@Mock
	private RankRepositoryAdapter rankRepositoryAdapter;

	private KafkaRankEntity kafkaRankEntity;
	private Rank rank;

	@BeforeEach
	public void setUp() {
		kafkaRankEntity = new KafkaRankEntity("가나다" , 10);
		rank = KafkaRankEntity.rankEntityToRank(kafkaRankEntity);
	}


	@Test
	@DisplayName("랭크 저장 테스트")
	public void saveRankTest() {
		// given when
		BDDMockito.doNothing().when(rankRepositoryAdapter).saveUserScore(Mockito.any(Rank.class));


		//then
		Assertions.assertThatNoException().isThrownBy(() -> saveRankService.saveRank(kafkaRankEntity));
	}
}
