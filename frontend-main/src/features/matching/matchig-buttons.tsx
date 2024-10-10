import { PrimaryButton, Caption2Text } from "@atoms/index";
import { memo } from "react";

export const MatchingButtons = memo(
  ({
    isMatchingStatus,
    onConnect,
    onDisconnect,
  }: {
    isMatchingStatus: boolean;
    onConnect: () => void;
    onDisconnect: () => void;
  }) => {
    return (
      <div className="flex flex-col items-center justify-center gap-5">
        {isMatchingStatus ? (
          <>
            <PrimaryButton
              showIcon={false}
              onClick={onDisconnect}
              size="small"
              color="white"
            >
              매칭 취소
            </PrimaryButton>
            <Caption2Text className="text-catch-gray-300">
              주의! 매칭 완료 후 탈주하면 레이팅이 감소해요
            </Caption2Text>
          </>
        ) : (
          <>
            <PrimaryButton
              showIcon={true}
              onClick={onConnect}
              size="small"
              color="main"
            >
              매칭시작
            </PrimaryButton>
            <Caption2Text className="text-catch-gray-300">
              배틀에 사용할 장착 수집물을 확인하세요
            </Caption2Text>
          </>
        )}
      </div>
    );
  },
);
