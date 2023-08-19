import SpinningWheel from "@/components/spinning-wheel/spinning-wheel";
import styleSheet from "@/styles/dist/q2-content.module.css";

const Q2Content: React.FC = () => {
  const prizes = [
    { name: "1", percentage: "" },
    { name: "2", percentage: "" },
    { name: "3", percentage: "" },
  ];
  return (
    <div>
      <SpinningWheel />
    </div>
  );
};

export default Q2Content;
