import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Successmodal from "../../components/add-form/Editsucess";
import { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as fromExpenseStore from "../../store/expense";
const Edit = () => {
  //params
  const params = useParams();
  const ids = params.id;

  //dispatch
  const dispatch = useDispatch();

  //selectors
  const totalExpenses = useSelector(fromExpenseStore.selectExpenseListData);

  //state
  const [modalOpen, setModalOpen] = useState(false);
  const [expenseState, setExpenseState] = useState({
    title: "",
    amount: 0,
  });

  //functions
  const onChange = (e: any) => {
    setExpenseState({ ...expenseState, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let foundExpenseData = {};
    Object.values(totalExpenses).forEach((totalExpense: any) => {
      foundExpenseData = totalExpense.find(
        (expense: any) => expense.id === ids
      );
    });
    setExpenseState({ ...expenseState, ...foundExpenseData });
  }, [totalExpenses]);

  const handleSubmit = () => {
    dispatch(fromExpenseStore.editExpense(expenseState));
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Box>
        <Link to="/">
          <Button
            width="65px"
            height="30px"
            fontSize="12px"
            border="1px solid black"
            borderRadius="6px"
            backgroundColor="cyan.400"
            marginLeft="280px"
          >
            <HStack justifyContent="center" alignItems="center">
              <AiOutlineHome />
              <Text>Home</Text>
            </HStack>
          </Button>
        </Link>
        <FormControl>
          <Successmodal modalOpen={modalOpen} />
          <FormLabel>Title</FormLabel>
          <Input
            width="350px"
            name="title"
            placeholder="Expenditure Name"
            value={expenseState.title}
            onChange={onChange}
          />
          <FormLabel paddingRight="7px">Amountरु</FormLabel>
          <Input
            className="amount-input"
            name="amount"
            placeholder="Enter Amount"
            width="350px"
            value={expenseState.amount}
            onChange={onChange}
          />
          {/* Category */}

          <Box
            className="Form-add-button"
            paddingTop="50px"
            paddingLeft="210px"
            color="white"
          >
            <Stack direction="row" spacing={4}>
              <Button
                colorScheme="blue"
                display="flex"
                onClick={handleSubmit}
                border="1px solid black"
                padding="2px 8px"
                borderRadius="6px"
                cursor="pointer"
                color="white"
                leftIcon={<AiOutlinePlus />}
                variant="solid"
              >
                Edit
              </Button>
            </Stack>
          </Box>
        </FormControl>
      </Box>
    </div>
  );
};

export default Edit;
