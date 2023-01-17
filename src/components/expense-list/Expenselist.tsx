import * as fromExpenseStore from "../../store/expense";
import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Card from "./Card";
import { editExpense } from "../../store/expense";
import { useForm } from "react-hook-form";

const Expenselist = () => {
  const totalExpense = useSelector(fromExpenseStore.selectExpenseListData)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isEditing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const [state, setState] = useState({

    content: "",
  });

  const { content } = state;
  const onEditToggle = (content: any) => {
    setEditing(true);
    setState({ ...state, content });
  };
  const edit = (props: any) => {
    dispatch(editExpense({ title: props.content }));
    // console.log(props, state)
    setEditing(false);
  };
  const notifySuccess = () => toast.success("Expenses Deleted Successfully");

  return <Box>
    {isEditing ? (
      <form onSubmit={handleSubmit(edit)}>
        <label>Edit Your Expenses</label>
        <input style={{ color: "white" }}{...register("content", { maxLength: 20, })} />
        {errors?.content?.type === "maxLength" && <p style={{ color: "red" }}>You cannot add more than 20 letters!! ⚠</p>}
        <Button color="black" type="submit" className="button" >
          Edit
        </Button>
      </form>
    ) : (
      <ul>
        {totalExpense && Object.keys(totalExpense).map((key: any) => {
          return <Box key={key}>
            <Text as='b'>{key}</Text>
            {totalExpense[key]?.length !== 0 && totalExpense[key]?.map((expense: any) => {
              if (expense?.title !== "Total") return <Card key={expense.expense} id={expense.id} expense={expense} notifySuccess={notifySuccess} onEditToggle={onEditToggle} />
              else return <Text textAlign='center'>Your Total Expenses is=RS {expense.amount}   </Text>;
            })}
          </Box>
        }
        )}
      </ul>



    )}

  </Box>
};

export default Expenselist;