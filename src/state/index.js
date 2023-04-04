import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	mode: 'dark',
};

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setMode: (state) => {
			state.mode = state.mode === 'light' ? 'dark' : 'light';
		},
	},
});

const { setMode } = globalSlice.actions;
export { setMode };

export default globalSlice.reducer;
