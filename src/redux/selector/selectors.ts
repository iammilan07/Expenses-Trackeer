
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


export const selectcategoryList = (state: any) => {

    let x: any = {}
    const mapped = state.expenseList.expense.map((item: any) => {
        return {
            ...item,
            createdAt: new Date(item.createdAt).toLocaleDateString("en-US"),
            category: (item.category.title),
        }
    })

    mapped.forEach((item: any) => {
        if (!x[item.category]) {
            x[item.category] = [];
            x[item.category].push(item);
        } else {
            x[item.category].push(item);
        }
    })
    return x
};

export const selectpiechartcat = (state: any) => {
    const data: any = []
    Object.entries(selectcategoryList(state)).forEach(entry => {

        const [key, value]: any = entry;
        var total_amount_ofaday = 0
        value.forEach((element: any) => {
            total_amount_ofaday += element['amount']
        });

        data.push({ "name": key, "value": total_amount_ofaday })
    })

    return data
};

// export const selectMappedcategory = (state: any) => {

//     let x: any = {}
//     const mapped = state.expenseList.expense.map((item: any) => {
//         return {
//             ...item,
//             category: (item.category.title),
//             createdAt: new Date(item.createdAt).toLocaleDateString("en-US"),
//         }
//     })
//     mapped.forEach((item: any) => {
//         console.log(item)
//         if (!x[item.createdAt]) {
//             x[item.createdAt] = [];
//             let obj: any = {}
//             x[item.createdAt].push(obj);
//             obj[item.category] = []
//             obj[item.category].push(item.amount)
//         }
//         else {
//             let obj: any = {}
//             x[item.createdAt].push(obj);
//             obj[item.category] = []
//             obj[item.category].push(item.amount)
//         }

//     })
//     return x
// };

// export const selectcategorypiechart = (state: any) => {
//     const data: any = {}
//     Object.entries(selectMappedcategory(state)).forEach(entry => {

//         const [key, value]: any = entry;
//         value.forEach((element: any) => {
//             if (!data[key]) {
//                 data[key] = [];
//                 let obj: any = {}
//                 data[key].push(obj);
//                 obj[key] = []
//                 obj[element.category].push(element.amount)
                
//             }
//             else {
//                 let obj: any = {}
//                 data[key].push(obj);
//                 obj[element.category] = []
//                 obj[element.category].push(element.amount)
//             }
//         });


//     })

//     return data
// };





