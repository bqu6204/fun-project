import { NextPageWithLayout } from "../page";
import YoubikeLayout from "@/components/layout/youbike-layout";

const StopInfo: NextPageWithLayout = () => {
  return <div className=" w-screen h-screen bg-white"></div>;
};

export default StopInfo;

StopInfo.getLayout = (_page) => {
  return <YoubikeLayout>{_page}</YoubikeLayout>;
};
