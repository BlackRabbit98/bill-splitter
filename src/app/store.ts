import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import costReducer from '../reducer/costReducer';
import userReducer from '../reducer/userReducer';

const store = configureStore({
	reducer: {
		user: userReducer,
		cost: costReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useReduxDispatch = () => useDispatch<AppDispatch>();

export default store;
