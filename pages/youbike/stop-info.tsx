import { NextPageWithLayout } from "../page";
import YoubikeLayout from "@/components/layout/youbike-layout";
import Section1Filter from "@/page-components/youbike/stop-info/section1-filter";
import Section2Result from "@/page-components/youbike/stop-info/section2-result";

const StopInfo: NextPageWithLayout = () => {
  return (
    <div className=" w-screen h-screen bg-white youbike-page">
      <Section1Filter />
      <Section2Result />
    </div>
  );
};

export default StopInfo;

StopInfo.getLayout = (_page) => {
  return <YoubikeLayout>{_page}</YoubikeLayout>;
};
