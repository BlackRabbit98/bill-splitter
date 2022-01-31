import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';

export type User = { name: string };

type Reducers = {
	addUsers: (state: User[], action: PayloadAction<User[]>) => User[];
	removeUser: (state: User[], action: PayloadAction<number>) => User[];
};

const userSlice = createSlice<User[], Reducers>({
	name: 'user',
	initialState: [],
	reducers: {
		addUsers: (_, action) => action.payload,
		removeUser: (users, action) =>
			users.filter((_, idx) => idx !== action.payload),
	},
});

export const { addUsers, removeUser } = userSlice.actions;
export default userSlice.reducer;

export const selectUser = (state: RootState): User[] => state.user;
