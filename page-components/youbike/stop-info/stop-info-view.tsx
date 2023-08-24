import Section1Filter from "@/page-components/youbike/stop-info/section1-filter";
import Section2Result from "@/page-components/youbike/stop-info/section2-result";
import { useRequest } from "@/hooks/useRequest";
import { useEffect } from "react";
import { IYoubikeData } from "@/type";
import { useYoubikeDispatch, useYoubikeSelector } from "@/hooks/useRedux";
import {
  Counties,
  renewCountyAreas,
  renewSearchTerms,
} from "@/redux/youbike/youbike-filter-slice";

import { setDataList } from "@/redux/youbike/youbike-data-slice";
import { useDebounce } from "@/hooks/useDebounce";

interface IStopInfoView {}

const StopInfoView: React.FC<IStopInfoView> = () => {
  const dispatch = useYoubikeDispatch();
  const { allCountyAreas, currentCounty, search } = useYoubikeSelector(
    (state) => state.youbikeFilter
  );
  const { dataList } = useYoubikeSelector((state) => state.youbikeData);

  // get data and keep data fresh
  const { doRequest, errors, isFetching } = useRequest({
    method: "GET",
    url: process.env.YOUBIKE_STOP_INFO_API as string,
    onSuccess: (dataList) => {
      const taipeiAreasList: string[] = [];
      const searchTermList: string[] = [];

      let currentArea = "";
      (dataList as IYoubikeData[]).forEach((data) => {
        if (data.sarea !== currentArea) {
          taipeiAreasList.push(data.sarea);
          currentArea = data.sarea;
        }

        const stopName = data.sna.substring(data.sna.indexOf("_") + 1);
        searchTermList.push(stopName);
      });

      dispatch(setDataList(dataList));
      dispatch(renewCountyAreas(taipeiAreasList));
      dispatch(renewSearchTerms(searchTermList));
    },
  });

  useEffect(() => {
    doRequest();
    const fetchInterval = setInterval(doRequest, 3 * 60 * 1000);
    return () => clearInterval(fetchInterval);
  }, []);

  // filter the data
  const [filterdDataList, isPending, refreshDelay, error] = useDebounce(() => {
    const isCheckedAreas: string[] = [];
    allCountyAreas[currentCounty].forEach((area) => {
      if (area.isChecked) isCheckedAreas.push(area.name);
    });

    return dataList
      .filter(() => currentCounty === Counties.Taipei)
      .filter((data) => data.sna.includes(search))
      .filter((data) => isCheckedAreas.includes(data.sarea));
  }, 500);

  useEffect(() => refreshDelay(), [search, currentCounty, allCountyAreas]);

  return (
    <div className=" w-screen bg-white youbike-page">
      <Section1Filter />
      <Section2Result
        className="my-4"
        isFiltering={isPending}
        isFetching={isFetching}
        dataList={filterdDataList !== null ? filterdDataList : dataList}
      />
    </div>
  );
};

export default StopInfoView;
