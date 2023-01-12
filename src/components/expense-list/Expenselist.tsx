import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectMappedList } from "../../redux/index/index";
import Card from "./Card";

const Expenselist = () => {


  const data = useSelector(selectMappedList)

  let totalExpense: any = {};

  const xMapped = Object.keys(data).forEach((key: any) => {
    const expenseCloned = data[key];

    const total = expenseCloned.reduce((acc: any, curr: any) => {
      return acc + curr.amount
    }, 0)

    expenseCloned.push({
      title: 'Total',
      amount: total,
    })

    totalExpense[key] = expenseCloned

  })
  console.log(xMapped)

  Object.keys(totalExpense).forEach(key => {


    const expArr = totalExpense[key];

    expArr.forEach((exp: any) => {
      console.log(exp.amount)
    })
    return totalExpense;
  })

  const notifySuccess = () => toast.success("Deleted Successfully");

  return <Box>


    {totalExpense && Object.keys(totalExpense).map((key: any) => {

      return <Box key={key}>
        <Text as='b'>{key}</Text>
        {totalExpense[key]?.length !== 0 && totalExpense[key]?.map((expense: any, index: number) => {
          if (expense?.title !== "Total") return <Card key={index} expense={expense} notifySuccess={notifySuccess} />
          else return <Text textAlign='center'>Your Total Expenses is=RS {expense.amount}   </Text>;
        })}

      </Box>
    }
    )}


  </Box>
};

export default Expenselist;
