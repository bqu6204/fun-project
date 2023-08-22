import PrimaryLayout from "@/components/layout/primary-layout";
import { NextPageWithLayout } from "../page";
import Q2View from "@/page-components/questions/q2/q2-view";

const Q2: NextPageWithLayout = () => {
  return <Q2View />;
};

export default Q2;

Q2.getLayout = (_page) => {
  return <PrimaryLayout>{_page}</PrimaryLayout>;
};
