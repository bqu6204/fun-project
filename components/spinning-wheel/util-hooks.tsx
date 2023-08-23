import { TPrize } from "./spinning-wheel";
import { useState, Dispatch, SetStateAction } from "react";

export const useDefaultPrize = (
  prizes: TPrize[],
  defaultPrize?: TPrize
): [TPrize[], Dispatch<SetStateAction<TPrize[]>>, string] => {
  const totalPercentage = prizes.reduce(
    (total, prize) => total + prize.percentage,
    0
  );
  const defaultPercentage = 100 - totalPercentage;
  const defaultPrizeInfo = defaultPrize || {
    title: "無",
    percentage: defaultPercentage,
    backgroundColor: "#777",
  };

  const [adjustedPrizes, setAdjustedPrizes] = useState<TPrize[]>([
    ...prizes,
    defaultPrizeInfo,
  ]);

  return [adjustedPrizes, setAdjustedPrizes, defaultPrizeInfo.title];
};

export const useClipPath = (prizes: TPrize[]) => {
  const prizeCount = prizes.length;
  const prizeDegree = 360 / prizeCount;

  const { clipPathPercentage, clipAngleDegrees } =
    calculateClipPercentage(prizeCount);

  function calculateClipPercentage(N: number) {
    if (N <= 4) return { clipPathPercentage: 100, clipAngleDegrees: 0 };

    const clipAngleDegrees = (90 - 360 / N) / 2;
    const clipAngleRadians = (clipAngleDegrees * Math.PI) / 180;
    const clipTan = Math.tan(clipAngleRadians);
    const clipPathPercentage = Math.round((1 - clipTan) * 100);

    return { clipPathPercentage, clipAngleDegrees };
  }

  return { prizeCount, prizeDegree, clipPathPercentage, clipAngleDegrees };
};
