import styleSheet from "@/styles/dist/burger-bar.module.css";

interface IBurgerBar {
  className?: string;
  isActivate: boolean;
  onClick: () => void;
}

const BurgerBar: React.FC<IBurgerBar> = ({
  className,
  isActivate,
  onClick,
}) => {
  return (
    <div className={className} onClick={onClick}>
      <div className={styleSheet.container}>
        <div className={styleSheet.box}>
          <span
            className={`${styleSheet.line} ${styleSheet.line1} ${
              isActivate && styleSheet.isActivate
            }`}
          ></span>
          <span
            className={`${styleSheet.line} ${styleSheet.line2} ${
              isActivate && styleSheet.isActivate
            }`}
          ></span>
          <span
            className={`${styleSheet.line} ${styleSheet.line3} ${
              isActivate && styleSheet.isActivate
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default BurgerBar;
