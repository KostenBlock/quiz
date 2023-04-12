import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalsI {
	isRetina: null | boolean;
	height: number;
	width: number | null;
	[propName: string]: any;
}

const initialState: GlobalsI = {
	height: 0,
	width: null,
	isRetina: null
};

export const globalsSlice = createSlice({
	name: "globals",
	initialState,
	reducers: {
		setState: (state: GlobalsI, action:PayloadAction<Partial<GlobalsI>>) => {
			try {
				const valueArg = action.payload;
				for (const key in valueArg) {
					if (Object.hasOwnProperty.call(valueArg, key) && Object.hasOwnProperty.call(state, key)) {
						state[key] = valueArg[key];
					}
				}
			} catch (error) {
				console.error(error);
			}
		},
	},
});

export const { setState } = globalsSlice.actions;

export const selectGlobalsSlice = (state: { globals: GlobalsI }) => state.globals;

export default globalsSlice.reducer;
