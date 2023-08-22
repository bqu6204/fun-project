import { createSlice } from "@reduxjs/toolkit";

type TArea = { name: string; isChecked: boolean };

export enum Counties {
  Taipei = "台北市",
  Hsinchu = "新竹市",
}

type TInitialState = {
  currentCounty: Counties;
  allCountyAreas: Record<Counties, TArea[]>;

  search: string;
  searchTerms: string[];
};

const initialState: TInitialState = {
  allCountyAreas: {
    [Counties.Taipei]: [],
    [Counties.Hsinchu]: [
      { name: "東區", isChecked: true },
      { name: "北區", isChecked: true },
      { name: "香山區", isChecked: true },
    ],
  },
  currentCounty: Counties.Taipei,
  search: "",
  searchTerms: [],
};

export const youbikeFilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    renewSearchTerms: (state, action) => {
      state.searchTerms = action.payload;
    },
    renewCountyAreas: (state, action) => {
      // action.payload is a string[] of area name;
      const newAreaList = action.payload as string[];
      const currentCounty = state.currentCounty;
      const currentCountyArea = state.allCountyAreas[currentCounty];

      // If the area's name is in the newAreaList, keep it in the array

      const updatedCountyAreas = currentCountyArea.filter((area) =>
        newAreaList.includes(area.name)
      );

      // Add new areas to the array for names not found in the currentCountyArea
      newAreaList.forEach((newArea) => {
        if (!currentCountyArea.some((area) => area.name === newArea)) {
          updatedCountyAreas.push({ name: newArea, isChecked: true });
        }
      });

      state.allCountyAreas[currentCounty] = updatedCountyAreas;
    },

    selectCounty: (state, action) => {
      const selectedCounty = action.payload as Counties;
      state.currentCounty = selectedCounty;
      state.allCountyAreas[selectedCounty] = state.allCountyAreas[
        selectedCounty
      ].map((area) => {
        return { ...area, isChecked: true };
      });
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    checkDistrict: (state, action) => {
      const checkedArea = action.payload;

      const currentCountyArea = state.allCountyAreas[state.currentCounty];
      state.allCountyAreas[state.currentCounty] = currentCountyArea.map(
        (area) => {
          if (area.name === checkedArea)
            return { ...area, isChecked: !area.isChecked };
          else return area;
        }
      );
    },

    checkAllDistricts: (state, action) => {
      const currentCounty = state.currentCounty;
      const isNotAllChecked = state.allCountyAreas[currentCounty].some(
        (area) => !area.isChecked
      );

      if (isNotAllChecked) {
        state.allCountyAreas[currentCounty] = state.allCountyAreas[
          currentCounty
        ].map((area) => {
          return { ...area, isChecked: true };
        });
      } else {
        state.allCountyAreas[currentCounty] = state.allCountyAreas[
          currentCounty
        ].map((area) => {
          return { ...area, isChecked: false };
        });
      }
    },
  },
});

export const {
  selectCounty,
  setSearch,
  checkDistrict,
  checkAllDistricts,
  renewCountyAreas,
  renewSearchTerms,
} = youbikeFilterSlice.actions;

export default youbikeFilterSlice.reducer;
