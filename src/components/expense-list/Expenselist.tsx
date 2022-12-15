import { Box, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {
  seelctExpenseQuery,
  selectExpenseList,
} from "../../redux/selector/selectors";
import Card from "./Card";

const Expenselist = () => {

  const list = useSelector(selectExpenseList);

  const query = useSelector(seelctExpenseQuery);

  // const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filteredList = list.filter((expense: any) => expense.title.includes(query));


  const notifySuccess = () => toast.success("Deleted Successfully");

  return (
    <Box
      className="expense-list"
      margin="6px 12px"
      display="flex"
      flexDirection="column"
      flex="1"
    >
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length > 0 ? filteredList.map((expense: any) => {

        return <Card expense={expense} notifySuccess={notifySuccess} />
      }
        // <pre>{JSON.stringify(expense, null, 2)}</pre>

      )
        : (
          <Box
            className="empty-state"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image
              src={require("../../assets/images/empty.png")}
              alt="Your List is Empty"
              className="empty-image"
              height="360px"
            />
            <Text>Your list is empty.</Text>
          </Box>
        )}

    </Box>
  );
};

export default Expenselist;
