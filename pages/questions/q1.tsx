import PrimaryLayout from "@/components/layout/primary-layout";
import { NextPageWithLayout } from "../page";
import Q1View from "@/page-components/questions/q1/q1-view";

const Q1: NextPageWithLayout = () => {
  return <Q1View />;
};

export default Q1;

Q1.getLayout = (_page) => {
  return <PrimaryLayout>{_page}</PrimaryLayout>;
};
