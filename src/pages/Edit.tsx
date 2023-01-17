import React from 'react'
import { useParams } from 'react-router-dom';
import * as fromExpenseStore from "../store/expense";
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addExpense, editExpense } from '../store/expense';
const Edit = () => {
    const dispatch = useDispatch()
    const totalExpense = useSelector(fromExpenseStore.selectExpenseListData)
    const { register, handleSubmit, formState: { errors } } = useForm()
    // const { expense } = props;
    const params = useParams()
    const id = params.id
    const getExpenseById = (id: any) => {
        const expenses: any = totalExpense();
        const expense = expenses.find((expense: any) => expense.id === id);
        return expense;
    };
    const editExpensee = (id: any, newExpense: any) => {
        let expenses = totalExpense();
        expenses = expenses.filter((expense: any) => expense.id !== id);
        expenses.push(newExpense);
        localStorage["expenses"] = JSON.stringify(expenses);
    };
    const edit = (e: any) => {
        e.preventDefault();
        dispatch(editExpense(id))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(edit)}>
                <label>Edit Your Expenses</label>
                <input style={{ color: "white" }}{...register("content", { maxLength: 20, })} />
                {errors?.content?.type === "maxLength" && <p style={{ color: "red" }}>You cannot add more than 20 letters!! ⚠</p>}
                <Button color="black" type="submit" className="button" >
                    Edit
                </Button>
            </form>
        </div>
    )
}

export default Edit