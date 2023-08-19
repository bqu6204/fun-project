import styleSheet from "@/styles/dist/arrow.module.css";

interface IArrow {
  direction: "left" | "right" | "up" | "down";
}

const Arrow: React.FC<IArrow> = ({ direction }) => {
  return (
    <div className={styleSheet.box}>
      <i className={`${styleSheet.arrow} ${styleSheet[direction]}`}></i>
    </div>
  );
};

export default Arrow;
