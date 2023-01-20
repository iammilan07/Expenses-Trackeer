// import { expenseDB } from "../../database"
import { expenseDB } from "../../database"
import * as fromSlice from "./slice"

// // get
// export const fetchExpense = (expense: any): any => async (dispatch: any, getState: any) => {

// try {
//     const response = await localStorage.get(expense)
//     dispatch(fromSlice.addExpense(response))
// } catch (error) {
//     console.error(error);
// }


export const fetchExpense = (): any => async (dispatch: any) => {
    const response = await localStorage.getItem('expense-list')
    if (response) {
        dispatch(fromSlice.fetchExpense(JSON.parse(response)))
    }
}

export const addExpense = (expense: any): any => async (dispatch: any) => {
    dispatch(fromSlice.addExpense(expense))
    const response = await localStorage.getItem(expense);

    if (response) {
        const data: any = response;
        dispatch(fromSlice.addExpense(data))
    }
}

// export const fetchExpense = (): any => async (dispatch: any) => {
//     const response = await expenseDB.get('expense')
//     if (response) {
//         // dispatch(fromSlice.fetchExpense(JSON.parse(response)))
//     }
// }

// export const addExpense = (expense: any): any => async (dispatch: any) => {
//     dispatch(fromSlice.addExpense(expense))
//     const response = await expenseDB.get(expense);

//     if (response) {
//         const data: any = response;
//         dispatch(fromSlice.addExpense(data))
//     }
// }




// export const addExpense = (expense: any): any => (dispatch: any) => {
//     dispatch(fromSlice.addExpense(expense))
// };
export const deleteExpensee = (id: any): any => (dispatch: any) => {
    dispatch(fromSlice.deleteExpense(id))

};


export const editExpense = (expenseState: any) => (dispatch: any) => {
    dispatch(fromSlice.editExpense(expenseState))
};

