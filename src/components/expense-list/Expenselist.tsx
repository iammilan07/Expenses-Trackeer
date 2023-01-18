import * as fromExpenseStore from "../../store/expense";
import { Box, Text } from "@chakra-ui/react";
import { toast } from "react-toastify";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useState } from "react";

const Expenselist = () => {
  const totalExpense = useSelector(fromExpenseStore.selectExpenseListData)
  const notifySuccess = () => toast.success("Expenses Deleted Successfully");
  const [state, setState] = useState({
    title: "",
  });
  const onEditToggle = (title: any) => {

    setState({ ...state, title });
  };
  return <Box>

    {totalExpense && Object.keys(totalExpense).map((key: any) => {
      return <Box key={key}>
        <Text as='b'>{key}</Text>
        {totalExpense[key]?.length !== 0 && totalExpense[key]?.map((expense: any) => {
          if (expense?.title !== "Total") return <Card key={expense.id} onEditToggle={onEditToggle} id={expense.id} expense={expense} notifySuccess={notifySuccess} />
          else return <Text textAlign='center'>Your Total Expenses is=RS {expense.amount}   </Text>;
        })}
      </Box>
    }
    )}






  </Box>
};

export default Expenselist;