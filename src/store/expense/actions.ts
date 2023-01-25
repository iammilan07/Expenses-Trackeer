import { categories } from "../../constants/Addcategories"
import { expenseDB } from "../../database"
import * as fromSlice from "./slice"

// export const fetchExpense = (): any => async (dispatch: any) => {
//     dispatch(fromSlice.request())
//     const response: any = await localStorage.getItem('expense-list')
//     if (response) {
//         dispatch(fromSlice.fetchExpense(JSON.parse(response)))
//         dispatch(fromSlice.request());
//     }
// }

// export const addExpense = (expense: any): any => async (dispatch: any) => {
//     dispatch(fromSlice.addExpense(expense))
//     const response = await localStorage.getItem(expense);

//     if (response) {
//         const data: any = response;
//         dispatch(fromSlice.addExpense(data))
//     }
// }



export const fetchExpense = (): any => async (dispatch: any) => {

    dispatch(fromSlice.request());
    const response: any = await expenseDB.allDocs({
        include_docs: true,
        attachments: true
    })
    const mapped = response.rows.map((row: any) => row.doc)
    dispatch(fromSlice.fetchExpense(mapped))
}

export const addExpense = (expense: any): any => async (dispatch: any) => {
    // dispatch(fromSlice.addExpense(expense))
    const response = await expenseDB.post(expense);
    console.log(response)
    if (response) {
        const { id }: any = response;
        dispatch(fromSlice.addExpense({ ...expense, id }))
    }
}



export const deleteExpensee = (id: any): any => async (dispatch: any) => {
    try {
        await expenseDB.remove(id)
        dispatch(fromSlice.deleteExpense(id))
    } catch (error) {
        // console.log(error)
    }
}

// export const deleteExpensee = (id: any): any => (dispatch: any) => {
//     dispatch(fromSlice.deleteExpense(id))
// };

export const editExpense = (expense: any): any => async (dispatch: any) => {
    console.log("updateddata", expense)
    try {
        dispatch(fromSlice.editExpense(expense))
        await expenseDB.put(expense)
    } catch (error) {
        // console.log(error)
    }
}

// export const editExpense = (expenseState: any) => (dispatch: any) => {
//     dispatch(fromSlice.editExpense(expenseState))
// };



