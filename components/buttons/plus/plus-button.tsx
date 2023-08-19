import styleSheet from "@/styles/dist/plus-button.module.css";

const PlusButton: React.FC = () => {
  return (
    <div className={styleSheet.container}>
      <div className={styleSheet.plus}></div>
    </div>
  );
};

export default PlusButton;
