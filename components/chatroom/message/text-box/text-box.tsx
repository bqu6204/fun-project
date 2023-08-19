import styleSheet from "@/styles/dist/text-box.module.css";

interface ITextBox {
  text: string;
  isSelf: boolean;
}

const TextBox: React.FC<ITextBox> = ({ text, isSelf }) => {
  return (
    <div
      className={`${isSelf ? styleSheet.isSelf : ""} ${styleSheet.container}`}
    >
      {text}
    </div>
  );
};

export default TextBox;
