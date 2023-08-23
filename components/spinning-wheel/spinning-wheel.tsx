import styleSheet from "@/styles/dist/spinning-wheel.module.css";
import Wheel from "./wheel";
import { useEffect, useState } from "react";
import { useDefaultPrize, useClipPath } from "./util-hooks";

export type TPrize = {
  title: string;
  percentage: number;
  backgroundColor: string;
};
interface ISpinningWheel {
  className?: string;
  size?: string;
  prizes: TPrize[];
  defaultPrize?: TPrize;
  spinDurationMs?: number;
  onSpinStart?: () => string | null;
  onSpinEnd?: () => void;
}

const SpinningWheel: React.FC<ISpinningWheel> = ({
  className,
  size,
  prizes,
  spinDurationMs,
  defaultPrize,
  onSpinStart,
  onSpinEnd,
}) => {
  const [totalRotateDegree, setTotalRotateDegree] = useState<number>(0);
  const [adjustedPrizes, setAdjustedPrizes, defaultPrizeTitle] =
    useDefaultPrize(prizes, defaultPrize);
  const { prizeCount, prizeDegree, clipPathPercentage, clipAngleDegrees } =
    useClipPath(adjustedPrizes);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  function spinStart() {
    setIsSpinning(true);

    let resultIndexArray: number[] = [];

    if (!onSpinStart) {
      resultIndexArray.push(Math.floor(Math.random() * adjustedPrizes.length));
    } else {
      const onSpinStartResult = onSpinStart();
      const targetTitle = onSpinStartResult || defaultPrizeTitle;

      resultIndexArray = adjustedPrizes.reduce((accum, prize, index) => {
        if (prize.title === targetTitle) {
          accum.push(index);
        }
        return accum;
      }, [] as number[]);
    }

    const selectedRotateIndex =
      resultIndexArray[Math.floor(Math.random() * resultIndexArray.length)];

    setTotalRotateDegree(
      (prev) =>
        prev - (prev % 360) - (360 * 2 + selectedRotateIndex * prizeDegree)
    );
  }

  function spinEnd() {
    setIsSpinning(false);
    if (onSpinEnd) onSpinEnd();
  }

  useEffect(() => {
    if (totalRotateDegree === 0) return;
    const timeOut = setTimeout(spinEnd, spinDurationMs);

    return () => clearTimeout(timeOut);
  }, [totalRotateDegree]);

  return (
    <div
      className={`${styleSheet.wrapper} ${className}`}
      style={{ width: size ?? "400px" }}
    >
      <div className={styleSheet.container}>
        <div
          className={styleSheet.spinBtn}
          onClick={isSpinning ? () => {} : spinStart}
        >
          spin
        </div>
        <Wheel
          prizes={adjustedPrizes}
          rotateDegree={totalRotateDegree}
          spinDurationMs={spinDurationMs || 2000}
          clipPercentage={clipPathPercentage}
          prizeDegree={prizeDegree}
        />
      </div>
    </div>
  );
};

export default SpinningWheel;
