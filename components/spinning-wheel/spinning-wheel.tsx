import styleSheet from "@/styles/dist/spinning-wheel.module.css";
import Wheel from "./wheel";
const prizes = [
  { title: "頭獎", percentage: 10, backgroundColor: "#138" },
  { title: "貳等獎", percentage: 50, backgroundColor: "#981" },
  { title: "肆等獎", percentage: 5, backgroundColor: "#911" },

  { title: "參等獎", percentage: 25, backgroundColor: "#862" },
  { title: "肆等獎", percentage: 5, backgroundColor: "#911" },

  { title: "參等獎", percentage: 25, backgroundColor: "#862" },

  { title: "肆等獎", percentage: 5, backgroundColor: "#911" },
  { title: "伍等獎", percentage: 10, backgroundColor: "#191" },

  { title: "肆等獎", percentage: 5, backgroundColor: "#911" },
];

const SpinningWheel: React.FC = () => {
  return (
    <div className={styleSheet.wrapper}>
      <div className={styleSheet.container}>
        <div className={styleSheet.spinBtn}>spin</div>
        <Wheel prizes={prizes} />
      </div>
    </div>
  );
};

export default SpinningWheel;
