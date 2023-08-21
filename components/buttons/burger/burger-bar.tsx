import styleSheet from "@/styles/dist/burger-bar.module.css";

interface IBurgerBar {
  className?: string;
  isActivate: boolean;
  onClick: () => void;
  color?: string;
}

const BurgerBar: React.FC<IBurgerBar> = ({
  className,
  isActivate,
  onClick,
  color,
}) => {
  const colorSettings = {
    backgroundColor: color ?? "#000",
    borderColor: color ?? "#000",
  };

  return (
    <div className={className} onClick={onClick}>
      <div className={styleSheet.container}>
        <div className={styleSheet.box}>
          <span
            className={`${styleSheet.line} ${styleSheet.line1} ${
              isActivate && styleSheet.isActivate
            }`}
            style={colorSettings}
          ></span>
          <span
            className={`${styleSheet.line} ${styleSheet.line2} ${
              isActivate && styleSheet.isActivate
            }`}
            style={colorSettings}
          ></span>
          <span
            className={`${styleSheet.line} ${styleSheet.line3} ${
              isActivate && styleSheet.isActivate
            }`}
            style={colorSettings}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default BurgerBar;
