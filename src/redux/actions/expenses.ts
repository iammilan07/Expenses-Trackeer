import * as fromSlice from "../slice/expenses"
import * as fromSlicee from "../slice/category"


export const addExpense = (expense: any): any => (dispatch: any) => {
  dispatch(fromSlice.addExpense(expense))
};

export const addCategory = (category: any): any => (dispatch: any) => {
  dispatch(fromSlicee.addCategory(category))
};
export const deleteExpense = (item: any): any => (dispatch: any) => {

  dispatch(fromSlice.deleteExpense(item))

};

export const editExpense = (expense: any): any => (dispatch: any) => {
  dispatch(fromSlice.editExpense(expense))
}

export const searchExpense = (query: any): any => (dispatch: any) => {
  dispatch(fromSlice.searchExpense(query))

};
