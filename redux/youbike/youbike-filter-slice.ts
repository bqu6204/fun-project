import { createSlice } from "@reduxjs/toolkit";
import taiwanCountyDistricts from "@/public/data/taiwan-county-districts.json";

type TInitialState = {
  county: string;
  districts: { name: string; isChecked: boolean }[];
  search: string;
  searchTerms: string[];
};

const initialCity = "台北市";

const initialState: TInitialState = {
  county: "",
  districts: taiwanCountyDistricts[initialCity].map((disctrict) => {
    return { name: disctrict, isChecked: true };
  }),
  search: "",
  searchTerms: [],
};

export const youbikeFilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectCounty: (state, action) => {
      state.county = action.payload;
      state.districts = taiwanCountyDistricts[
        action.payload as keyof typeof taiwanCountyDistricts
      ].map((disctrict) => {
        return { name: disctrict, isChecked: true };
      });
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },
    checkDistrict: (state, action) => {
      state.districts = state.districts.map((district) => {
        if (district.name === action.payload)
          return { ...district, isChecked: !district.isChecked };
        else return district;
      });
    },
    checkAllDistricts: (state, action) => {
      const isNotAllChecked = state.districts.some(
        (district) => !district.isChecked
      );

      if (isNotAllChecked) {
        state.districts = state.districts.map((district) => {
          return { ...district, isChecked: true };
        });
      } else {
        state.districts = state.districts.map((district) => {
          return { ...district, isChecked: false };
        });
      }
    },
  },
});

export const { selectCounty, setSearch, checkDistrict, checkAllDistricts } =
  youbikeFilterSlice.actions;

export default youbikeFilterSlice.reducer;
