// import { expenseDB } from "../../database"
import * as fromSlice from "./slice"


// export const newExpense = (expense: any): any => async (dispatch: any) => {
//     dispatch(fromSlice.addExpense(expense))
//     await expenseDB.post(expense)
//     await dispatch(fromSlice.addExpense(expense))
// }

// export const removeExpense = (expense: any): any => async (dispatch: any, getState: any) => {
//     try {
//         await expenseDB.remove(expense._id, expense._rev)
//         await dispatch(fromSlice.deleteExpense(expense))
//     } catch (error) {
//         // console.log(error)
//     }
// }
// export const addExpense = (expense: any): any => (dispatch: any) => {
//     dispatch(fromSlice.addExpense(expense))
// };
// export const deleteExpense = (id: any): any => (dispatch: any) => {
//     dispatch(fromSlice.deleteExpense(id))
// };


// export const editExpense = (data: any) => (dispatch: any) => {
//     console.log(data)
//     dispatch(fromSlice.editExpense(data))
// };

