import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import { User } from './userReducer';

export type Cost = User & { cost: number };

type Reducers = {
	addCosts: (state: Cost[], action: PayloadAction<Cost[]>) => Cost[];
};

const costSlice = createSlice<Cost[], Reducers>({
	name: 'cost',
	initialState: [],
	reducers: {
		addCosts: (_, action) => action.payload,
	},
});

export const { addCosts } = costSlice.actions;
export default costSlice.reducer;

export const selectCost = (state: RootState): Cost[] => state.cost;
