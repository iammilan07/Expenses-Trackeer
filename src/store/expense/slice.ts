import { createSlice } from "@reduxjs/toolkit";
import { IDLE_STATUS, loadingType, LOADING_STATUS } from "../../constants/index";

export interface ExpenseState {
    expense: any[],
    loaded: boolean,
    loading: loadingType
}

const initialState: ExpenseState = {
    expense: [],
    loaded: false,
    loading: LOADING_STATUS,

};

const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        request: (state,) => {
            state.loading = LOADING_STATUS
        },
        success: (state, action) => {
            state.expense = action.payload
            state.loading = IDLE_STATUS
        },
        fetchExpense: (state: any, action: any) => {
            state.expense = action.payload

        },

        addExpense: (state: any, action: any) => {
            state.expense.push(action.payload)
        },

        deleteExpense: (state: any, action: any) => {
            const newStatee = state.expense.filter((item: any) => item.id !== action.payload.id);
            // localStorage.setItem(storageKey, JSON.stringify(newStatee));
            state.expense = newStatee;
        },

        editExpense: (state, action) => {
            const data = state.expense
            const newData = data.map((item: any) =>
                item.id === action.payload.id ? action.payload : item);
            // expenseDB.put(newData)
            state.expense = newData
        },

    },
});

export const {
    success, request, fetchExpense, addExpense, deleteExpense, editExpense
} = expenseSlice.actions;

export default expenseSlice.reducer;
