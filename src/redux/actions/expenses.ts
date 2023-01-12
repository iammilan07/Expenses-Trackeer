import * as fromSlice from "../slice/expenses"
import * as fromSlicee from "../slice/category"
import { trackDb } from "../../database"


export const newExpense = (expense: any): any => async (dispatch: any) => {
  dispatch(fromSlice.addExpense(expense))
  await trackDb.post(expense)
  await dispatch(fromSlice.addExpense(expense))
}

// export const newExpense = (): any => async (dispatch: any) => {
//   const docs = await trackDb.allDocs({
//     include_docs: true,
//     attachments: true
//   })
//   const mapped = docs.rows.map(row => row.doc)
//   dispatch(fromSlice.addExpense(mapped))
// }
export const removeExpense = (expense: any): any => async (dispatch: any, getState: any) => {
  try {
    await trackDb.remove(expense._id, expense._rev)
    await dispatch(fromSlice.deleteExpense(expense))


  } catch (error) {
    console.log(error)
  }
}





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
