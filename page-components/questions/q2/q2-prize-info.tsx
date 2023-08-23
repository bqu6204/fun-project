import styleSheet from "@/styles/dist/q2-view.module.css";
import { useRef, useEffect } from "react";

export type TSpinResult = {
  spinResultMessage: string;
  priceLeftString: string;
};

interface IQ2PrizeInfo {
  totalPrizes: string;
  spinResultList: TSpinResult[];
}

const Q2PrizeInfo: React.FC<IQ2PrizeInfo> = ({
  totalPrizes,
  spinResultList,
}) => {
  const resultListRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    // Scroll to the bottom of the message container when a new message arrives
    if (resultListRef.current) {
      resultListRef.current.scrollTop = resultListRef.current.scrollHeight;
    }
  }, [spinResultList]);

  return (
    <div className={styleSheet.prizeInfo}>
      <h3 className={styleSheet.totalPrizes}>
        獎品一覽：
        <br />
        {totalPrizes}
      </h3>
      <div className={styleSheet.spinResultContainer}>
        <ul className={styleSheet.spinResultUl} ref={resultListRef}>
          {spinResultList.map((result, idx) => (
            <li className={styleSheet.spinResultLi} key={idx}>
              <span className={styleSheet.spinResult}>
                {result.spinResultMessage}
              </span>
              <span className={styleSheet.spinResult}>
                {result.priceLeftString}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Q2PrizeInfo;
