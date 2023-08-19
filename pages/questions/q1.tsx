import PrimaryLayout from "@/components/layout/primary-layout";
import { NextPageWithLayout } from "../page";
import QuestionInfo from "@/page-components/questions/question-info";
import Q1Content from "@/page-components/questions/q1/q1-content";

const Q1: NextPageWithLayout = () => {
  return (
    <main>
      <div className="flex flex-col space-y-3">
        <QuestionInfo
          title="Question 1"
          discription="1 + 2 - 3 + 4 - 5 + 6 -.....+ or - N"
        />
        <Q1Content />
      </div>
    </main>
  );
};

export default Q1;

Q1.getLayout = (_page) => {
  return <PrimaryLayout>{_page}</PrimaryLayout>;
};
