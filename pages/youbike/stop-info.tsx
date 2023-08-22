import { NextPageWithLayout } from "../page";
import YoubikeLayout from "@/components/layout/youbike-layout";
import { Provider } from "react-redux";
import youbikeStore from "@/redux/youbike/youbike-store";
import StopInfoView from "@/page-components/youbike/stop-info/stop-info-view";

const StopInfo: NextPageWithLayout = () => {
  return (
    <Provider store={youbikeStore}>
      <StopInfoView />
    </Provider>
  );
};

export default StopInfo;

StopInfo.getLayout = (_page) => {
  return <YoubikeLayout>{_page}</YoubikeLayout>;
};
