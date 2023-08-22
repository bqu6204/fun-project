import QuestionInfo from "@/page-components/questions/question-info";
import Q1Content from "@/page-components/questions/q1/q1-content";

interface IQ1View {}

const Q1View: React.FC<IQ1View> = () => {
  return (
    <main>
      <div className="flex flex-col space-y-3 mb-36">
        <QuestionInfo
          title="Question 1"
          discription="1 + 2 - 3 + 4 - 5 + 6 -.....+ or - N"
        />
        <Q1Content />
      </div>
    </main>
  );
};

export default Q1View;
