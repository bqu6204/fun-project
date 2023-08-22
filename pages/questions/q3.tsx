import Q3View from "@/page-components/questions/q3/q3-view";
import { NextPageWithLayout } from "../page";
import PrimaryLayout from "@/components/layout/primary-layout";

const Q3: NextPageWithLayout = () => {
  return <Q3View />;
};

export default Q3;

Q3.getLayout = (_page) => {
  return <PrimaryLayout>{_page}</PrimaryLayout>;
};
