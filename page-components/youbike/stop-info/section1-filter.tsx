import Image from "next/image";
import styleSheet from "@/styles/dist/section1-filter.module.css";
import { useState } from "react";
import { useYoubikeSelector, useYoubikeDispatch } from "@/hooks/useRedux";
import {
  selectCounty,
  setSearch,
  checkDistrict,
  checkAllDistricts,
} from "@/redux/youbike/youbike-filter-slice";

import YoubikeSelect from "@/components/inputs/select/youbike-select";
import YoubikeSearch from "@/components/inputs/search/youbike-search";
import YoubikeCheckBox from "@/components/inputs/checkbox/youbike-checkbox";

import taiwanCountyDistrcits from "@/public/data/taiwan-county-districts.json";

const Section1Filter: React.FC = () => {
  const counties = Object.keys(
    taiwanCountyDistrcits
  ) as (keyof typeof taiwanCountyDistrcits)[];

  const { county, districts, search, searchTerms } = useYoubikeSelector(
    (state) => state.youbikeFilter
  );
  const dispatch = useYoubikeDispatch();

  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-8"}>
      <div>
        <h2
          className={"mt-8 light-green text-2xl font-medium tracking-[.25rem]"}
        >
          站點資訊
        </h2>
        <div className={"lg:flex gap-4 select-none"}>
          <YoubikeSelect
            className="mt-[10px]"
            options={counties}
            currentValue={county}
            onChange={(value) => dispatch(selectCounty(value))}
          />
          <YoubikeSearch
            className="grow mt-[10px]"
            currentValue={search}
            onChange={(value) => dispatch(setSearch(value))}
            searchTerms={counties}
          />
        </div>

        <YoubikeCheckBox
          className="my-6"
          isChecked={districts.every((district) => district.isChecked)}
          value="全部勾選"
          onChange={(value) => dispatch(checkAllDistricts(value))}
        />
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-6">
          {districts.map((district) => {
            return (
              <YoubikeCheckBox
                isChecked={district.isChecked}
                value={district.name}
                onChange={(value) => dispatch(checkDistrict(value))}
              />
            );
          })}
        </div>
      </div>
      <div
        className="hidden md:block relative"
        style={{ width: "100%", height: "100%" }}
      >
        <Image
          src="/images/ride-bicycle.png"
          alt="Image showing 2 peaople riding bicycle"
          title="ride bicycle"
          fill
          priority
          className="next-image-contain"
          sizes="(max-width: 640px) 0px, (min-width: 640px) 50vw"
        />
      </div>
    </div>
  );
};

export default Section1Filter;
