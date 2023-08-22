import SpinningWheel from "@/components/spinning-wheel/spinning-wheel";
import { useState } from "react";

type TPrize = {
  title: string;
  percentage: number;
  backgroundColor: string;
  count: number;
};

const Q2Content: React.FC = () => {
  const [allPrizes, setAllPrizes] = useState<TPrize[]>(
    [
      { title: "頭獎", percentage: 0.1, backgroundColor: "#138", count: 1 },
      { title: "貳等獎", percentage: 3, backgroundColor: "#981", count: 1 },
      { title: "參等獎", percentage: 13, backgroundColor: "#862", count: 3 },
      { title: "肆等獎", percentage: 18, backgroundColor: "#911", count: 5 },
      { title: "伍等獎", percentage: 25, backgroundColor: "#191", count: 9 },
    ].sort((a, b) => a.percentage - b.percentage)
  );
  const [prizeWon, setPrizeWon] = useState<string | "">("");

  const handlePlay = () => {
    const randomNumber = Math.random();

    const resultIndex = allPrizes.findIndex(
      (prize) => randomNumber <= prize.percentage / 100
    );

    if (resultIndex !== -1 && allPrizes[resultIndex].count > 0) {
      const result = allPrizes[resultIndex];
      setPrizeWon(result.title);
      setAllPrizes((prev) => {
        const updatedPrizes = [...prev];
        updatedPrizes[resultIndex] = {
          ...result,
          count: result.count - 1,
        };
        return updatedPrizes;
      });

      return;
    } else {
      setPrizeWon("No prize won");
    }
  };

  return (
    <div>
      <SpinningWheel
        prizes={allPrizes}
        onSpinEnd={() => {
          handlePlay();
          console.log(prizeWon);
        }}
        size="300px"
      />
    </div>
  );
};

export default Q2Content;
