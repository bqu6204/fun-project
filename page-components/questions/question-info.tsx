interface IQuestionInfo {
  title: string;
  discription: string;
  className?: string;
}

const QuestionInfo: React.FC<IQuestionInfo> = ({
  className,
  title,
  discription,
}) => {
  return (
    <div className={className || ""}>
      <div className="flex flex-col space-y-3">
        <div className="text-center text-6xl">
          <h1 className="text-gray-800 font-semibold my-8">{title} </h1>
          <h2 className="text-sm text-gray-600 my-4 max-w-md m-auto">
            <i>{discription}</i>
            {/* <i>1 + 2 - 3 + 4 - 5 + 6 -.....+ or - N</i> */}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default QuestionInfo;
