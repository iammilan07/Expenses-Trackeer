import { createSlice } from "@reduxjs/toolkit";
import { storageKey } from "../../constants";

const initialList = () => {
  const list = localStorage.getItem("expense-list");
  let expenses = [];
  if (list) {
    expenses = JSON.parse(list);
  }
  return expenses;
};

const initialState = {
  expense: initialList(),
  query: "",
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const newState = [...state.expense, action.payload];
      localStorage.setItem(storageKey, JSON.stringify(newState));
      state.expense = newState
    },



    deleteExpense: (state: any, action: any) => {
      const { title } = action.payload
      const newStatee = state.expense.filter(
        (expense: any) => expense.title !== title);
      localStorage.setItem(storageKey, JSON.stringify(newStatee));
      state.expense = newStatee;
    },
    editExpense: (state: any, action: any) => {
      let { expense } = state;
      state.expense = expense.map((item: any) =>
        item.id === action.payload.id ? action.payload : item
      )
    },
    searchExpense: (state: any, action: any) => {
      const { query } = action;
      return {
        ...state,
        query,
      };
    },
  },
});

export const { addExpense, deleteExpense, editExpense, searchExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
