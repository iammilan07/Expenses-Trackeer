import { createSlice } from "@reduxjs/toolkit";
import { storageKey, storagevalue } from "../../constants";

const initialList = () => {
  const list = localStorage.getItem("expense-list");
  let expenses = [];
  if (list) {
    expenses = JSON.parse(list);
  }
  return expenses;
};
const initialListCat = () => {
  const item = localStorage.getItem("category-item");
  let categories = [];
  if (item) {
    categories = JSON.parse(item);
  }
  return categories;
};


const initialState = {
  expense: initialList(),
  category: initialListCat(),
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

    addCategory: (state, action) => {
      const newState = [...state.category, action.payload];
      localStorage.setItem(storagevalue, JSON.stringify(newState));
      state.category = newState
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

export const { addExpense, addCategory, deleteExpense, searchExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
