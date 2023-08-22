import Q4View from "@/page-components/questions/q4/q4-view";
import { NextPageWithLayout } from "../page";
import PrimaryLayout from "@/components/layout/primary-layout";

const Q4: NextPageWithLayout = () => {
  return <Q4View />;
};

export default Q4;

Q4.getLayout = (_page) => {
  return <PrimaryLayout>{_page}</PrimaryLayout>;
};
