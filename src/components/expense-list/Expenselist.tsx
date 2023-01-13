// import { Box, Flex, HStack, List, ListItem, Text } from "@chakra-ui/react";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import Card from "./Card";
// import { useDispatch } from "react-redux";
// import * as fromExpenseStore from "../../store/expense";
// import { AiOutlineDelete } from "react-icons/ai";
// import { deleteExpense } from "../../store/expense/index";

// const Expenselist = (props: any) => {
//   const { expense, notifySuccess } = props;
//   const dispatch = useDispatch();
//   const handleDelete = () => {
//     notifySuccess();
//     dispatch(deleteExpense(expense));
//   };
//   const expenseData = useSelector(fromExpenseStore.selectExpenseListData)

//   // const notifySuccess = () => toast.success("Deleted Successfully");

//   return <>
//     <List spacing={3}>
//       {Object.keys(expenseData).map(dateKey => {
//         return <ListItem>
//           <Box rounded="sm" p={1} bg="orange.600" >
//             <Text>{dateKey}</Text>
//           </Box>

//           <List spacing={2}>
//             {expenseData[dateKey]?.map((expenseItem: any) => {
//               return <ListItem rounded="sm" p={1} bg={`${expenseItem.title === "Total" ? "green.600" : ""}`}>
//                 <Flex justifyContent="space-between">
//                   <Text>{expenseItem.title}</Text>
//                   <HStack>
//                     <Text>{expenseItem.amount}</Text>
//                     <Text cursor="pointer" className="delete-icon" fontSize="16px" >
//                       <AiOutlineDelete onClick={handleDelete} />
//                     </Text>
//                   </HStack>

//                 </Flex>
//               </ListItem>
//             })}
//           </List>

//         </ListItem>
//       })}
//     </List>
//   </>
// }

// export default Expenselist;


import * as fromExpenseStore from "../../store/expense";
import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Card from "./Card";


const Expenselist = () => {
  const totalExpense = useSelector(fromExpenseStore.selectExpenseListData)

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