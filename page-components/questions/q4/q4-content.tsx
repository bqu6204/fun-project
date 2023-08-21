import Link from "next/link";

const Q4Content: React.FC = () => {
  return (
    <div>
      <Link
        href={"/youbike/stop-info"}
        className="block underline text-gray-800 text-center text-xl  "
      >
        點擊此處前往youbike即時站點資訊
      </Link>
    </div>
  );
};

export default Q4Content;
