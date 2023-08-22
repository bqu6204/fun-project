import styleSheet from "@/styles/dist/youbike-pagination.module.css";

interface IYoubikePagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const YoubikePagination: React.FC<IYoubikePagination> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  return (
    <div className={styleSheet.container}>
      <button
        className={styleSheet.prev}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        上一頁
      </button>
      <input
        type="number"
        value={currentPage}
        className={styleSheet.input}
        onChange={(e) => handlePageChange(parseInt(e.target.value, 10))}
      />
      <span className={styleSheet.totalPages}>/ {totalPages}</span>
      <button
        className={styleSheet.next}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        下一頁
      </button>
    </div>
  );
};

export default YoubikePagination;
