import { NextPageWithLayout } from "../page";
import YoubikeLayout from "@/components/layout/youbike-layout";

const Charge: NextPageWithLayout = () => {
  return <div className=" w-screen h-screen bg-white"></div>;
};

export default Charge;

Charge.getLayout = (_page) => {
  return <YoubikeLayout>{_page}</YoubikeLayout>;
};
