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
      const { createdAt } = action.payload
      const newStatee = state.expense.filter(
        (expense: any) => expense.createdAt !== createdAt);
      localStorage.setItem(storageKey, JSON.stringify(newStatee));
      state.expense = newStatee;



      // const { data } = action;
      // const updatedList = state.expense.filter(
      //   (item: any) => item.createdAt !== data.createdAt
      // );
      // localStorage.setItem("expense-list", JSON.stringify(updatedList));
      // return {
      //   ...state,
      //   expenseList: updatedList,
      // };
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

export const { addExpense, deleteExpense, searchExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;

// export const expenseReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case ADD_EXPENSE: {
//       localStorage.setItem(
//         "expense-list",
//         JSON.stringify([...state.expenseList, action.data])
//       );
//       return {
//         ...state,
//         expenseList: [...state.expenseList, action.data],
//       };
//     }
//     case DELETE_EXPENSE: {
//       const { data } = action;
//       const updatedList = state.expenseList.filter(
//         (item) => item.crestedAt !== data.crestedAt
//       );
//       localStorage.setItem("expense-list", JSON.stringify(updatedList));
//       return {
//         ...state,
//         expenseList: updatedList,
//       };
//     }
//     case SEARCH_EXPENSE: {
//       const { query } = action;
//       return {
//         ...state,
//         query,
//       };
//     }
//     default:
//       return state;
//   }
// };
