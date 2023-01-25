import { createSlice } from "@reduxjs/toolkit";
// import { storageKey } from "../../constants";
// import { expenseDB } from "../../database";
import { IDLE_STATUS, loadingType, LOADING_STATUS } from "../../constants/index";

export interface ExpenseState {
    expense: any[],
    loaded: boolean,
    loading: loadingType
}
// const initialList = () => {
//     const list = localStorage.getItem("expense-list");
//     let expenses = [];
//     if (list) {
//         expenses = JSON.parse(list);
//     }
//     return expenses;
// };


const initialState: ExpenseState = {
    // expense: initialList(),
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
            // console.log(state.expanse);
        },

        addExpense: (state: any, action: any) => {
            state.expense.push(action.payload)
        },



        // addExpense: (state: any, action: any) => {
        //     const newList = [...state.expense, action.payload]
        //     localStorage.setItem(storageKey, JSON.stringify(newList));
        //     state.expense = newList
        // },


        deleteExpense: (state: any, action: any) => {
            const newStatee = state.expense.filter((item: any) => item.id !== action.payload.id);
            // localStorage.setItem(storageKey, JSON.stringify(newStatee));
            state.expense = newStatee;
        },

        // editExpense: (state, action) => {
        //     const data: any = state.expense;
        //     const filteredExpenseData = data.map((expenseData: any) => {
        //         if (expenseData.id === action.payload.id) {
        //             return action.payload
        //         }
        //         return expenseData
        //     })
        //     state.expense = filteredExpenseData
        // }





        // editExpense: (state, action) => {
        //     const expense: any = window.localStorage.getItem('expense-list');
        //     const parsedExpenseDataFromStorage = JSON.parse(expense)
        //     const filteredExpenseData = parsedExpenseDataFromStorage.map((expenseData: any) => {
        //         if (expenseData.id === action.payload.id) {
        //             return action.payload
        //         }
        //         return expenseData
        //     })
        //     localStorage.setItem(storageKey, JSON.stringify(filteredExpenseData))
        //     state.expense = filteredExpenseData
        // }

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
