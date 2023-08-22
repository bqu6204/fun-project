import styleSheet from "@/styles/dist/spinning-wheel.module.css";
import Wheel from "./wheel";
import { useEffect, useState } from "react";

interface ISpinningWheel {
  className?: string;
  size?: string;
  prizes: TPrize[];
  onSpinStart?: () => void;
  onSpinEnd?: (result: string) => void;
}

type TPrize = {
  title: string;
  percentage: number;
  backgroundColor: string;
};

const SpinningWheel: React.FC<ISpinningWheel> = ({
  className,
  size,
  prizes,
  onSpinStart,
  onSpinEnd,
}) => {
  const spinDurationMs = 2000;
  const [rotateDegree, setRotateDegree] = useState<number>(0);

  const totalPercentage = prizes.reduce(
    (total, prize) => total + prize.percentage,
    0
  );
  const defaultPercentage = 100 - totalPercentage;
  const defaultPrize = {
    title: "No Prize",
    percentage: defaultPercentage,
    backgroundColor: "#999",
  };

  const [adjustedPrizes, setAdjustedPrizes] = useState<TPrize[]>([
    ...prizes,
    defaultPrize,
  ]);

  const prizeCount = adjustedPrizes.length;
  const prizeDegree = 360 / prizeCount;
  const clipPercentage = calculateClipPercentage(prizeCount);

  function spinStart() {
    const randomDegree = Math.floor(Math.random() * 360);
    setRotateDegree(randomDegree);
  }

  function spinEnd() {
    const adjustedRotateDegree = rotateDegree % 360; // Ensure the degree is within 0-359 range
    const resultIndex = Math.floor(
      (prizeCount - adjustedRotateDegree / prizeDegree) % prizeCount
    );

    const resultPrize = prizes[resultIndex];
    console.log("index", resultIndex);
    console.log("prize", resultPrize);
  }

  useEffect(() => {
    if (rotateDegree === 0) return;
    const timeOut = setTimeout(spinEnd, spinDurationMs);

    return () => clearTimeout(timeOut);
  }, [rotateDegree]);

  function calculateClipPercentage(N: number): number {
    if (N <= 4) return 100;

    const clipAngleDegrees = (90 - 360 / N) / 2;
    const clipAngleRadians = (clipAngleDegrees * Math.PI) / 180;
    const clipTan = Math.tan(clipAngleRadians);

    const clipSidePercentage = Math.round((1 - clipTan) * 100);

    return clipSidePercentage;
  }

  return (
    <div
      className={`${styleSheet.wrapper} ${className}`}
      style={{ width: size ?? "400px" }}
    >
      <div className={styleSheet.container}>
        <div className={styleSheet.spinBtn} onClick={spinStart}>
          spin
        </div>
        <Wheel
          prizes={prizes}
          rotateDegree={rotateDegree}
          spinDurationMs={spinDurationMs}
          clipPercentage={clipPercentage}
          prizeDegree={prizeDegree}
        />
      </div>
    </div>
  );
};

export default SpinningWheel;
