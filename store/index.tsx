import { configureStore } from "@reduxjs/toolkit";

import CRMSlice from "./reducers/crm.slice";
import globalsSlice from "~/store/reducers/globals.slice";

export const store = configureStore({
	reducer: {
		globals: globalsSlice,
		CRM: CRMSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
