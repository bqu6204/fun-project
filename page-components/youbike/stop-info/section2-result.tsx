import styleSheet from "@/styles/dist/section2-result.module.css";
import { useYoubikeSelector } from "@/hooks/useRedux";
import { IYoubikeData } from "@/type";
import { useState } from "react";
import YoubikePagination from "@/components/pagination/youbike-pagination";

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
  const [sortKey, setSortKey] = useState<keyof IYoubikeData>("sarea");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(dataList.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSort = (key: keyof IYoubikeData) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedAndSlicedData = [...dataList]
    .sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }
      return 0;
    })
    .slice(startIndex, endIndex);

  return (
    <div className={`${styleSheet.container} ${className}`}>
      <table className={styleSheet.table}>
        <thead className={styleSheet.thead}>
          <tr>
            <th>縣市</th>
            <th onClick={() => handleSort("sarea")}>區域</th>
            <th onClick={() => handleSort("sna")}>站點名稱</th>
            <th onClick={() => handleSort("sbi")}>可借車輛</th>
            <th onClick={() => handleSort("bemp")}>可還空位</th>
          </tr>
        </thead>

        <tbody
          className={`${styleSheet.tbody} ${
            isFiltering && dataList.length !== 0 ? styleSheet.isFiltering : ""
          }`}
        >
          {sortedAndSlicedData.map((data) => {
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

      <div className="flex gap-8 justify-center mt-4 items-center">
        <YoubikePagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
        />
        <span className="dark-green">
          共 <b className="text-xl">{dataList.length}</b> 筆資料
        </span>
      </div>
    </div>
  );
};

export default Section2Result;
