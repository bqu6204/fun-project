import SpinningWheel from "@/components/spinning-wheel/spinning-wheel";

const Q2Content: React.FC = () => {
  const prizes = [
    { title: "頭獎", percentage: 0.1, backgroundColor: "#138" },
    { title: "貳等獎", percentage: 3, backgroundColor: "#981" },
    { title: "參等獎", percentage: 13, backgroundColor: "#862" },
    { title: "肆等獎", percentage: 18, backgroundColor: "#911" },
    { title: "伍等獎", percentage: 25, backgroundColor: "#191" },
  ];
  return (
    <div>
      <SpinningWheel prizes={prizes} size="300px" />
    </div>
  );
};

export default Q2Content;
