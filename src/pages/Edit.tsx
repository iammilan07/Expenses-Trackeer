import React from 'react'
import { useParams } from 'react-router-dom';
import * as fromExpenseStore from "../store/expense";
import { useSelector } from 'react-redux';
const Edit = (props: any) => {
    const totalExpense = useSelector(fromExpenseStore.selectExpenseListData)

    const { expense } = props;
    const params = useParams()
    const id = params.id
    const getEmployeeById = (id: any) => {
        const expenses: any = props.expense;
        const expense = expenses.find((expense: any) => expense.id === id);
        return expense;

    };
    const editEmployee = (id: any, newExpense: any) => {
        let expenses = props.expense;
        expenses = expenses.filter((expense: any) => expense.id !== id);
        expenses.push(newExpense);
        localStorage["expenses"] = JSON.stringify(expenses);
    };
    return (
        <div></div>
    )
}

export default Edit