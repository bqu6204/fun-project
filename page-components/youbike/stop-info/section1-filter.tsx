import Image from "next/image";
import styleSheet from "@/styles/dist/section1-filter.module.css";
import YoubikeSelect from "@/components/inputs/select/youbike-select";
import { useState } from "react";
import YoubikeSearch from "@/components/inputs/search/youbike-search";

const Section1Filter: React.FC = () => {
  const counties = ["台北市", "新竹市"];
  const [currentCounty, setCurrentCounty] = useState<string>("");

  return (
    <div className={"grid grid-cols-1 sm:grid-cols-2"}>
      <div>
        <h2 className={"light-green text-2xl font-medium tracking-[.25rem]"}>
          站點資訊
        </h2>
        <div className={"lg:flex gap-4"}>
          <YoubikeSelect
            className="mt-[10px]"
            options={counties}
            currentValue={currentCounty}
            onChange={(value) => setCurrentCounty(value)}
          />
          <YoubikeSearch
            className="grow mt-[10px]"
            currentValue={currentCounty}
            onChange={(value) => setCurrentCounty(value)}
            searchTerms={counties}
          />
        </div>
      </div>
      <div
        className="hidden lg:block relative"
        style={{ width: "100px", height: "100px" }}
      >
        <Image
          src="/images/ride-bicycle.png"
          alt="Image showing 2 peaople riding bicycle"
          title="ride bicycle"
          fill
          priority
          className="next-image-contain"
        />
      </div>
    </div>
  );
};

export default Section1Filter;
