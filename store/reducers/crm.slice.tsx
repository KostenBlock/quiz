import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDirectusItemsByAxios } from "~/lib/directus";

import { CrmI } from "~/helpers/interfaces/crm.interface";

interface CrmSliceI extends CrmI{
    isPending: boolean;
    isError: boolean;
    [propName: string]: any;
}

const initialState: CrmSliceI = {
    imageKey: "",
    format: "",
    displayPhone: "",
    phone: "",
    button: "",
    questions: [],
    lead: "",
    logo: "",
    text: [],
    bonus: [],
    title: "",
    description: "",
    header: "",
    isPending: true,
    isError: false
};

export const CRMSlice = createSlice({
    name: "CRM",
    initialState,
    reducers: {
        setState: (state: CrmSliceI, action: PayloadAction<Partial<CrmSliceI>>) => {
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

export const getQuizData = createAsyncThunk('CRM/getQuizData', async (thunkArg, thunkAPI) => {
    try {
        thunkAPI.dispatch(setState({ isPending: true }));
        const quizData = await getDirectusItemsByAxios('quiz') as CrmI;
        thunkAPI.dispatch(setState({ ...quizData }));
    } catch (error) {
        thunkAPI.dispatch(setState({ isError: true }));
    } finally {
        thunkAPI.dispatch(setState({ isPending: false }));
    }
});

export const { setState } = CRMSlice.actions;
export const selectCRMSlice = (state: { CRM: CrmSliceI }) => state.CRM;
export default CRMSlice.reducer;
