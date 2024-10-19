import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterValuesType } from "../../types/types";

export type Filters = {
  checked: FilterValuesType;
};

const initialState: Filters = {
  checked: "" as FilterValuesType,
};

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		changeState:(state, action: PayloadAction<FilterValuesType>) => {
			state.checked = action.payload
		}
	}
});

export const {changeState} = filterSlice.actions

export default filterSlice.reducer


