import { categories } from "../../constants/Addcategories"
import { expenseDB } from "../../database"
import * as fromSlice from "./slice"


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

    }
}

export const editExpense = (expense: any): any => async (dispatch: any) => {
    console.log("updateddata", expense)
    try {
        dispatch(fromSlice.editExpense(expense))
        await expenseDB.put(expense)
    } catch (error) {

    }
}


