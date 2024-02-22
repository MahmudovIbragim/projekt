import { createSlice } from "@reduxjs/toolkit";


interface CalkType {
  value:number
}

const initialState: CalkType = {
  value:0
}


const calculatorSlice = createSlice({
  name: "calk",
  initialState,
  reducers: {
    plus: (state, action) => {
      return state.value + action.payload 
    },
  },
});

export const countCalk  = calculatorSlice.reducer;

export const { plus } = calculatorSlice.actions;
