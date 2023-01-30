import { useState, useEffect } from "react";
import * as fromExpenseStore from "../../store/expense";
import { Box, HStack, Text } from "@chakra-ui/react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { ImFilesEmpty } from "react-icons/im";
import { fetchExpense } from "../../store/expense/index";

const Expenselist = () => {
  const totalExpense = useSelector(fromExpenseStore.selectExpenseListData);

  const [state, setState] = useState({
    title: "",
  });
  const dispatch = useDispatch();

  const onEditToggle = (title: any) => {
    setState({ ...state, title });
  };
  useEffect(() => {
    dispatch(fetchExpense());
  }, []);

  return (
    <Box marginBottom="100px">
      {Object.keys(totalExpense).length > 0 ? (
        Object.keys(totalExpense).map((key: any) => {
          return (
            <Box key={key}>
              <Text as="b" key={totalExpense.id}>
                {key}
              </Text>
              {totalExpense[key]?.length !== 0 &&
                totalExpense[key]?.map((expense: any) => {
                  if (expense?.title !== "Total")
                    return (
                      <Card
                        key={expense.id}
                        onEditToggle={onEditToggle}
                        id={expense.id}
                        expense={expense}
                      />
                    );
                  else
                    return (
                      <Box flexDirection="row" textAlign="center">
                        <Text key={expense.id}>
                          Your Total Expenses is
                          <Text marginLeft="8px" as="b">
                            RS {expense.amount}.
                          </Text>
                        </Text>
                      </Box>
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
