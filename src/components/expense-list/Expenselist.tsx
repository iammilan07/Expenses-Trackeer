import * as fromExpenseStore from "../../store/expense";
import { Box, HStack, Text } from "@chakra-ui/react";
import { toast } from "react-toastify";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ImFilesEmpty } from "react-icons/im";
const Expenselist = () => {
  const totalExpense = useSelector(fromExpenseStore.selectExpenseListData);
  const notifySuccess = () => toast.success("Expenses Deleted Successfully");
  const [state, setState] = useState({
    title: "",
  });
  const onEditToggle = (title: any) => {
    setState({ ...state, title });
  };

  return (
    <Box>
      {Object.keys(totalExpense).length > 0 ? (
        Object.keys(totalExpense).map((key: any) => {
          return (
            <Box key={key}>
              <Text as="b">{key}</Text>
              {totalExpense[key]?.length !== 0 &&
                totalExpense[key]?.map((expense: any) => {
                  if (expense?.title !== "Total")
                    return (
                      <Card
                        key={expense.id}
                        onEditToggle={onEditToggle}
                        id={expense.id}
                        expense={expense}
                        notifySuccess={notifySuccess}
                      />
                    );
                  else
                    return (
                      <Text textAlign="center">
                        Your Total Expenses is=RS {expense.amount}
                      </Text>
                    );
                })}
            </Box>
          );
        })
      ) : (
        <Box marginTop="30vh" marginLeft="5vw" justifyContent="center">
          <Box display="flex">
            <Text as="b">Empty Expenses list!!</Text>
            <ImFilesEmpty />
          </Box>
          <Text>Please add some expenses ...</Text>
        </Box>
      )}
    </Box>
  );
};

export default Expenselist;
