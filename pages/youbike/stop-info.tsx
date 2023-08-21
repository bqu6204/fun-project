import { NextPageWithLayout } from "../page";
import YoubikeLayout from "@/components/layout/youbike-layout";
import Section1Filter from "@/page-components/youbike/stop-info/section1-filter";
import Section2Result from "@/page-components/youbike/stop-info/section2-result";
import { Provider } from "react-redux";
import youbikeStore from "@/redux/youbike/youbike-store";

const StopInfo: NextPageWithLayout = () => {
  return (
    <Provider store={youbikeStore}>
      <div className=" w-screen h-screen bg-white youbike-page">
        <Section1Filter />
        <Section2Result />
      </div>
    </Provider>
  );
};

export default StopInfo;

StopInfo.getLayout = (_page) => {
  return <YoubikeLayout>{_page}</YoubikeLayout>;
};
