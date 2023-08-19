import PrimaryLayout from "@/components/layout/primary-layout";
import { NextPageWithLayout } from "../page";
import QuestionInfo from "@/page-components/questions/question-info";
import Q2Content from "@/page-components/questions/q2/q2-content";

const Q2: NextPageWithLayout = () => {
  return (
    <main>
      <div className="flex flex-col space-y-3 ">
        <QuestionInfo title="Question 2" discription="抽抽樂，歡迎來抽獎！" />
        <Q2Content />
      </div>
    </main>
  );
};

export default Q2;

Q2.getLayout = (_page) => {
  return <PrimaryLayout>{_page}</PrimaryLayout>;
};
