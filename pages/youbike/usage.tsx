import { NextPageWithLayout } from "../page";
import YoubikeLayout from "@/components/layout/youbike-layout";

const Usage: NextPageWithLayout = () => {
  return <div className=" w-screen h-screen bg-white"></div>;
};

export default Usage;

Usage.getLayout = (_page) => {
  return <YoubikeLayout>{_page}</YoubikeLayout>;
};
