import QuestionInfo from "@/page-components/questions/question-info";

import Q4Content from "@/page-components/questions/q4/q4-content";

interface IQ4View {}

const Q4View: React.FC<IQ4View> = () => {
  return (
    <main>
      <div className="flex flex-col space-y-3 mb-64">
        <QuestionInfo
          title="Question 4"
          discription="請根據下方示意圖，假設您要起一個專案，請規劃下方聊天室的 component 會有幾個，然後元件的上下層關係...etc"
        />
        <Q4Content />
      </div>
    </main>
  );
};

export default Q4View;
