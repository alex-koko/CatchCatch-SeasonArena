package com.catchcatch.main.domains.member.adapter.in.web.requestdto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ChangeAvatarRequestDto(
        @NotBlank String avatar,
        @NotNull Long memberId;
) {
}
