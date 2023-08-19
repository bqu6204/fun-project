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
  const [spinResult, setSpinResult] = useState<string>("");
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  function spinStart() {
    if (isSpinning) return;
    setIsSpinning(true);

    if (onSpinStart) onSpinStart();

    const randomAngle = Math.floor(Math.random() * 361);
    setRotateDegree((prev) => prev + 360 * 2 + randomAngle);
  }

  function spinEnd() {
    setIsSpinning(false);
    console.log("rotate degree:", rotateDegree);
    const result = calculateResult(rotateDegree);
    console.log("result: ", result);
    if (onSpinEnd) onSpinEnd("123");
  }

  function calculateResult(rotateDegree: number) {
    const anglePerPrize = 360 / prizes.length;
    console.log("angle per prize: ", anglePerPrize);
    const mod = (rotateDegree + anglePerPrize) % 360;
    console.log("mod", mod);

    const index = Math.floor(mod / anglePerPrize);
    console.log("index", index);
    return prizes[index].title;
  }

  useEffect(() => {
    if (rotateDegree === 0) return;
    const timeOut = setTimeout(spinEnd, spinDurationMs);

    return () => clearTimeout(timeOut);
  }, [rotateDegree]);

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
        />
      </div>
    </div>
  );
};

export default SpinningWheel;
