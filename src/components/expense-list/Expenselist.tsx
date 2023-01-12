import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectMappedData, selectMappedList } from "../../redux/index/index";
import Card from "./Card";

const Expenselist = () => {

  const data = useSelector(selectMappedData)
  // console.log(data)
  let incc = 0;
  let decc = 0;
  Object.entries(data).forEach((expense: any) => {
    // console.log(expense)
    if (Number(expense.amount) > 0) {
      incc = incc + Number(expense.amount);
    } else {
      decc = decc - Number(expense.amount);
    }
  });
  const list = useSelector(selectMappedList);
  const notifySuccess = () => toast.success("Deleted Successfully");

  return <Box>


    {list && Object.keys(list).map((key: any) => {

      return <Box key={key}>
        <Text as='b'>{key}</Text>
        {list[key]?.length !== 0 && list[key]?.map((expense: any, index: number) => {
          return <Card key={index} expense={expense} notifySuccess={notifySuccess} />
        })}
        <Text textAlign='center'>Your Total Expenses is=RS  {incc - decc} </Text>
      </Box>
    }
    )}


  </Box>
};

export default Expenselist;
