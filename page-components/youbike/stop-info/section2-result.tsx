import styleSheet from "@/styles/dist/section2-result.module.css";
import { useYoubikeSelector } from "@/hooks/useRedux";
import { IYoubikeData } from "@/type";
import { useState } from "react";

interface ISection2Result {
  dataList: IYoubikeData[];
  isFiltering: boolean;
  className: string;
}

const Section2Result: React.FC<ISection2Result> = ({
  dataList,
  isFiltering,
  className,
}) => {
  const { currentCounty } = useYoubikeSelector((state) => state.youbikeFilter);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className={`${styleSheet.container} ${className}`}>
      <table className={styleSheet.table}>
        <thead className={styleSheet.thead}>
          <tr>
            <th>縣市</th>
            <th>區域</th>
            <th>站點名稱</th>
            <th>可借車輛</th>
            <th>可還空位</th>
          </tr>
        </thead>

        <tbody
          className={`${styleSheet.tbody} ${
            isFiltering ? styleSheet.isFiltering : ""
          }`}
        >
          {dataList.slice(startIndex, endIndex).map((data) => {
            return (
              <tr key={data.sno}>
                <td>{currentCounty}</td>
                <td>{data.sarea}</td>
                <td>{data.sna.substring(data.sna.indexOf("_") + 1)}</td>
                <td>{data.sbi}</td>
                <td>{data.bemp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Section2Result;
