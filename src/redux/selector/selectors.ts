export const selectExpenseList = (state: any) => state.expenseList.expense;
export const selectMappedList = (state: any) => {

    let x: any = {}
    const mapped = state.expenseList.expense.map((item: any) => {
        return {
            ...item,
            createdAt: new Date(item.createdAt).toLocaleDateString("en-US")
        }
    })

    mapped.forEach((item: any) => {
        if (!x[item.createdAt]) {
            x[item.createdAt] = [];
            x[item.createdAt].push(item);
        } else {
            x[item.createdAt].push(item);
        }
    })
    return x
};

// export const selectPrice = (state: any) => {
//     const price = state.expenseList.expense.map((item: any) => {
//         return {


//         }
//     })
//     console.log(selectPrice)
// }


export const selectExpenseQuery = (state: any) => state.expenseList.query;
