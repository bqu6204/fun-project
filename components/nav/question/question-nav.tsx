import Arrow from "../../arrows/arrow";
import Link from "next/link";
import styleSheet from "@/styles/dist/question-nav.module.css";

const QuestionNav: React.FC = () => {
  return (
    <div className="px-24 py-8">
      <div>
        <Link href="/" className={styleSheet.link}>
          <Arrow direction="left" />
          <div className={styleSheet.text}>back</div>
        </Link>
      </div>
    </div>
  );
};

export default QuestionNav;
