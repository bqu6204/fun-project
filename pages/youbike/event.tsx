import { NextPageWithLayout } from "../page";
import YoubikeLayout from "@/components/layout/youbike-layout";

const Events: NextPageWithLayout = () => {
  return <div className=" w-screen h-screen bg-white"></div>;
};

export default Events;

Events.getLayout = (_page) => {
  return <YoubikeLayout>{_page}</YoubikeLayout>;
};
