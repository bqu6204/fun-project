import styleSheet from "@/styles/dist/youbike-checkbox.module.css";

interface IYoubikeCheckbox {
  isChecked: boolean;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const YoubikeCheckBox: React.FC<IYoubikeCheckbox> = ({
  isChecked,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={className}>
      <label className={styleSheet.label}>
        <input
          className={styleSheet.input}
          type="checkbox"
          value={value}
          checked={isChecked}
          onChange={(e) => onChange(e.target.value)}
        />
        <span
          className={`${styleSheet.checkmark} ${
            isChecked ? styleSheet.isChecked : ""
          }`}
        ></span>
        <span className={styleSheet.value}> {value}</span>
      </label>
    </div>
  );
};

export default YoubikeCheckBox;
