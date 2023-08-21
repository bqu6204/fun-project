import styleSheet from "@/styles/dist/youbike-search.module.css";
import { useState, useEffect, ChangeEvent } from "react";
import { useDebounce } from "@/hooks/useDebounce";

interface IYoubikeSearch {
  currentValue: string;
  onChange: (value: string) => void;
  searchTerms: string[];
  className?: string;
}

const YoubikeSearch: React.FC<IYoubikeSearch> = ({
  currentValue,
  onChange,
  searchTerms,
  className,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [relatedTerms, setRelatedTerms] = useState<string[]>([]);
  const [result, refreshDelay] = useDebounce(() => {
    const temp = searchTerms.filter((item) => item.includes(currentValue));
    setRelatedTerms(temp);
  }, 300);

  const handleSelect = (term: string) => {
    onChange(term);
    refreshDelay();
    setIsDropdownOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDropdownOpen(true);
    refreshDelay();
    onChange(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className={className ?? ""}>
      <div className={styleSheet.container}>
        <input
          className={`${styleSheet.input} ${
            !currentValue && styleSheet.isEmpty
          }`}
          type="search"
          placeholder="搜尋站點"
          value={currentValue}
          onKeyDown={handleKeyPress}
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(true);
          }}
          onBlur={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(false);
          }}
          onChange={(e) => handleChange(e)}
        />

        {isDropdownOpen && (
          <ul className={styleSheet.ul}>
            {relatedTerms.length !== 0 ? (
              relatedTerms.map((term) => {
                return (
                  <li
                    className={styleSheet.relatedTerm}
                    onClick={() => handleSelect(term)}
                  >
                    {term}
                  </li>
                );
              })
            ) : (
              <li className={`${styleSheet.relatedTerm} ${styleSheet.isEmpty}`}>
                查無相關結果。
              </li>
            )}
            <li></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default YoubikeSearch;
