import { createSlice } from "@reduxjs/toolkit";
import { IYoubikeData } from "@/type";

type TInitialState = {
  dataList: IYoubikeData[];
};

const initialState: TInitialState = {
  dataList: [],
};

export const youbikeDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataList: (state, action) => {
      state.dataList = action.payload;
    },
  },
});

export const { setDataList } = youbikeDataSlice.actions;

export default youbikeDataSlice.reducer;
