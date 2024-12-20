import { useState } from "react";
import { TierRankingTab } from "./tier-ranking-tab";
import { TotalRankingTab } from "./total-ranking-tab";
import { RankingTabButton } from "./ranking-tab-button";
import { Body1Text } from "@atoms/index";
import { BottomNavBar } from "@ui/index";
import { CollectTimerModal } from "@/features/index";

const tabs = [
  { index: 0, name: "전체 순위", content: <TotalRankingTab /> },
  { index: 1, name: "티어 순위", content: <TierRankingTab /> },
];

export const RankingListContainer = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [timerModalOpen, setTimerModalOpen] = useState(false);

  const handleTimerOpenModal = () => {
    setTimerModalOpen(true);
  };
  const handleTimerCloseModal = () => {
    setTimerModalOpen(false);
  };

  return (
    <div className={`${className} flex flex-col w-full h-full`}>
      <div className="flex flex-row h-[10%] items-center p-3">
        <div className="flex flex-row gap-3 h-full w-[50%]">
          {tabs.map((el, idx) => (
            <RankingTabButton
              key={el.index}
              title={el.name}
              isSelected={activeTab === el.index}
              onClick={() => {
                setActiveTab(idx);
              }}
            />
          ))}
        </div>
        <div className="w-[50%] ">
          <Body1Text className="text-catch-main-400">2024 Autumn</Body1Text>
        </div>
      </div>
      <div className="w-full h-[65%]">{tabs[activeTab].content}</div>
      <div className="h-[25%] w-full justify-center flex items-center">
        <BottomNavBar
          onTimerModalOpen={handleTimerOpenModal}
          className="absolute bottom-0 z-10"
        />
      </div>
      {timerModalOpen && <CollectTimerModal onClose={handleTimerCloseModal} />}
    </div>
  );
};
