import styleSheet from "@/styles/dist/spinning-wheel.module.css";

interface IWheel {
  prizes: { title: string; percentage: number; backgroundColor: string }[];
}

const Wheel: React.FC<IWheel> = ({ prizes }) => {
  const prizeCount = prizes.length;
  const prizeDegree = 360 / prizeCount;
  const clipPercentage = calculateClipPercentage(prizeCount) - 1;

  function calculateClipPercentage(N: number): number {
    if (N <= 4) return 100;

    const clipAngleDegrees = (90 - 360 / N) / 2;
    const clipAngleRadians = (clipAngleDegrees * Math.PI) / 180;
    const clipTan = Math.tan(clipAngleRadians);

    const clipSidePercentage = Math.round((1 - clipTan) * 100);

    return clipSidePercentage;
  }

  return (
    <div className={styleSheet.wheel}>
      {prizes.map(({ backgroundColor, title }, idx) => {
        return (
          <div
            key={idx}
            className={styleSheet.prize}
            style={{
              backgroundColor,
              transform: `rotate(${prizeDegree * idx}deg)`,
              clipPath: `polygon(0 0 ,${clipPercentage}% 0, 100% 100%, 0 ${clipPercentage}%)`,
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
