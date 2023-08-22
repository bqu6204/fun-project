import styleSheet from "@/styles/dist/spinning-wheel.module.css";

interface IWheel {
  prizes: { title: string; percentage: number; backgroundColor: string }[];
  rotateDegree: number;
  spinDurationMs: number;
  prizeDegree: number;
  clipPercentage: number;
}

const Wheel: React.FC<IWheel> = ({
  prizes,
  rotateDegree,
  spinDurationMs,
  prizeDegree,
  clipPercentage,
}) => {
  return (
    <div
      className={styleSheet.wheel}
      style={{
        transform: `rotate(${rotateDegree}deg)`,
        transition: `transform ${spinDurationMs}ms ease`,
      }}
    >
      {prizes.map(({ backgroundColor, title }, idx) => {
        return (
          <div
            key={idx}
            className={styleSheet.prize}
            style={{
              backgroundColor,
              transform: `rotate(${prizeDegree * idx + 45}deg)`,
              clipPath: `polygon(0 0 ,${
                clipPercentage - 2
              }% 0, 100% 100%, 0 ${clipPercentage}%)`,
            }}
          >
            <div className={styleSheet.titleContainer}>
              <span className={styleSheet.titleBox}>
                {Array.from(title).map((char) => (
                  <span key={char}>{char}</span>
                ))}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Wheel;
