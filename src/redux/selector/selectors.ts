

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



export const selectpiechart = (state: any) => {



    const data: any = []

    Object.entries(selectMappedList(state)).forEach(entry => {

        const [key, value]: any = entry;

        var total_amount_ofaday = 0
        value.forEach((element: any) => {
            total_amount_ofaday += element['amount']
        });

        data.push({ "name": key, "value": total_amount_ofaday })
    })

    return data


};


export const selectCalendar = (state: any) => {



    const dataa: any = []

    Object.entries(selectMappedList(state)).forEach(entry => {

        const [key, value]: any = entry;

        var total_amount_ofaday = 0
        value.forEach((element: any) => {
            total_amount_ofaday += element['amount']
        });

        dataa.push({ "name": key, "value": total_amount_ofaday })
    })

    return dataa


};



