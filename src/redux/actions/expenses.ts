import * as fromSlice from "../slice/expenses"



export const addExpense = (expense: any): any => (dispatch: any) => {
  dispatch(fromSlice.addExpense(expense))
};

export const deleteExpense = (item: any): any => (dispatch: any) => {

  dispatch(fromSlice.deleteExpense(item))

};

export const editExpense = (expense: any): any => (dispatch: any) => {
  dispatch(fromSlice.searchExpense(expense))
}

export const searchExpense = (query: any): any => (dispatch: any) => {
  dispatch(fromSlice.searchExpense(query))

};
