import { NextPageWithLayout } from "../page";
import QuestionInfo from "@/page-components/questions/question-info";
import Q3Content from "@/page-components/questions/q3/q3-content";
import PrimaryLayout from "@/components/layout/primary-layout";

const Q3: NextPageWithLayout = () => {
  return (
    <main>
      <div className="flex flex-col space-y-3 min-h-screen">
        <QuestionInfo
          title="Question 3"
          discription="請根據下方示意圖，假設您要起一個專案，請規劃下方聊天室的 component 會有幾個，然後元件的上下層關係...etc"
        />
        <Q3Content />
      </div>
    </main>
  );
};

export default Q3;

Q3.getLayout = (_page) => {
  return <PrimaryLayout>{_page}</PrimaryLayout>;
};
