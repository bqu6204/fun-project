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
  const [result, isPending, refreshDelay] = useDebounce(() => {
    const temp = searchTerms.filter((item) => item.includes(currentValue));
    setRelatedTerms(temp);
  }, 300);

  const handleSelect = (e: React.MouseEvent, term: string) => {
    e.preventDefault();
    onChange(term);
    refreshDelay();
    setIsDropdownOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDropdownOpen(true);
    refreshDelay();
    onChange(e.target.value);
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
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(true);
          }}
          onBlur={(e) => {
            /// e.stopPropagation();
            e.preventDefault();
            console.log("onblur");
            setIsDropdownOpen(false);
          }}
          onChange={(e) => handleChange(e)}
        />

        {isDropdownOpen && (
          <ul className={styleSheet.ul}>
            {isPending ? (
              <li className={`${styleSheet.relatedTerm} ${styleSheet.isEmpty}`}>
                正在查找相關資料......
              </li>
            ) : !currentValue ? (
              <li className={`${styleSheet.relatedTerm} ${styleSheet.isEmpty}`}>
                請輸入關鍵字。
              </li>
            ) : relatedTerms.length !== 0 ? (
              relatedTerms.map((term, idx) => (
                <li
                  key={idx}
                  className={styleSheet.relatedTerm}
                  onMouseDown={(e) => handleSelect(e, term)}
                >
                  {term}
                </li>
              ))
            ) : (
              <li className={`${styleSheet.relatedTerm} ${styleSheet.isEmpty}`}>
                查無 「{currentValue}」 相關結果。
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default YoubikeSearch;
