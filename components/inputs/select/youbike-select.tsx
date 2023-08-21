import styleSheet from "@/styles/dist/youbike-select.module.css";
import { useState, useRef, useEffect } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

interface IYoubikeSelect {
  options: string[];
  currentValue: string;
  onChange: (value: string) => void;
  className?: string;
}

const YoubikeSelect: React.FC<IYoubikeSelect> = ({
  options,
  currentValue,
  onChange,
  className,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { ref: dropdownRef } = useClickOutside<HTMLUListElement>(() =>
    setIsDropdownOpen(false)
  );

  const handleSelect = (option: string) => {
    setIsDropdownOpen(false);
    onChange(option);
  };

  return (
    <div className={className ?? ""}>
      <div className={styleSheet.container}>
        <div
          className={`${styleSheet.selected} ${
            !currentValue && styleSheet.isEmpty
          } ${isDropdownOpen && styleSheet.isDropdownOpen}`}
          onMouseDown={(event) => {
            event.stopPropagation();
            setIsDropdownOpen((prev) => !prev);
          }}
        >
          {currentValue || "選擇縣市"}
        </div>
        {isDropdownOpen && (
          <ul className={styleSheet.ul} ref={dropdownRef}>
            {options.map((option, idx) => {
              return (
                <li
                  key={idx}
                  className={`${styleSheet.option} ${
                    currentValue === option ? styleSheet.isSelected : ""
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default YoubikeSelect;
