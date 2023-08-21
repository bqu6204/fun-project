import { NextPageWithLayout } from "../page";
import YoubikeLayout from "@/components/layout/youbike-layout";

const News: NextPageWithLayout = () => {
  return <div className=" w-screen h-screen bg-white"></div>;
};

export default News;

News.getLayout = (_page) => {
  return <YoubikeLayout>{_page}</YoubikeLayout>;
};
