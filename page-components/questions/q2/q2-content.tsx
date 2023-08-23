import SpinningWheel from "@/components/spinning-wheel/spinning-wheel";
import { useState, useMemo } from "react";
import Q2PrizeInfo, { TSpinResult } from "./q2-prize-info";

type TPrize = {
  title: string;
  percentage: number;
  backgroundColor: string;
  count: number;
};

const Q2Content: React.FC = () => {
  const [allPrizes, setAllPrizes] = useState<TPrize[]>(
    [
      { title: "頭獎", percentage: 0.1, count: 1, backgroundColor: "#138" },
      { title: "貳等獎", percentage: 3, count: 1, backgroundColor: "#981" },
      { title: "參等獎", percentage: 13, count: 3, backgroundColor: "#862" },
      { title: "肆等獎", percentage: 18, count: 5, backgroundColor: "#911" },
      { title: "伍等獎", percentage: 25, count: 9, backgroundColor: "#191" },
    ].sort((a, b) => a.percentage - b.percentage)
  );

  const [spinResultList, setSpinResultList] = useState<TSpinResult[]>([]);
  const [nextPrizeTitle, setNextPrizeTitle] = useState<string>("");

  const getPrizeLeftString = () => {
    const prizeLeft: number[] = [];
    allPrizes.forEach((prize, idx) => {
      prizeLeft.push(...Array(prize.count).fill(` ${idx + 1} `));
    });
    return `[${prizeLeft.toString()}]`;
  };

  const handleSpinStart = () => {
    const randomResult = Math.random();

    let accumulatedPercentage = 0;
    let nextPrizeTitle = "";

    for (const prize of allPrizes) {
      accumulatedPercentage += prize.percentage / 100;

      if (randomResult <= accumulatedPercentage) {
        if (prize.count > 0) {
          nextPrizeTitle = prize.title;
          // Create a copy of the allPrizes array
          const updatedPrizes = [...allPrizes];
          const wonPrizeIndex = updatedPrizes.findIndex(
            (p) => p.title === nextPrizeTitle
          );

          updatedPrizes[wonPrizeIndex].count--;
          setAllPrizes(updatedPrizes);
        }

        break;
      }
    }
    setNextPrizeTitle(nextPrizeTitle);

    return nextPrizeTitle;
  };

  const handleSpinEnd = () => {
    const message = nextPrizeTitle
      ? "恭喜抽到「" + nextPrizeTitle + "」！"
      : "真是可惜，沒有中獎！";

    setSpinResultList((prev) => [
      ...prev,
      {
        spinResultMessage: message,
        priceLeftString: `目前剩餘獎項  ${getPrizeLeftString()}`,
      },
    ]);
  };

  const totalPrizes = useMemo(() => getPrizeLeftString(), []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 gap-12 m-auto">
      <SpinningWheel
        prizes={allPrizes}
        spinDurationMs={2000}
        onSpinStart={handleSpinStart}
        size="300px"
        onSpinEnd={handleSpinEnd}
      />
      <Q2PrizeInfo spinResultList={spinResultList} totalPrizes={totalPrizes} />
    </div>
  );
};

export default Q2Content;
