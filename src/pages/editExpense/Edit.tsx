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
import { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as fromExpenseStore from "../../store/expense";
import { editExpense } from "../../store/expense/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Successmodal from "../../components/add-form/Editsucess";
import { MdOutlineArrowBackIos } from "react-icons/md";
const Edit = () => {
  // const notifySuccessAdd = () => toast.success("Expenses Added Successfully");
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
    // amount: 0,
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
    dispatch(editExpense(expenseState));
    // notifySuccessAdd();
    setModalOpen(!modalOpen);
  };

  return (
    <Box paddingTop="10px">
      <Successmodal modalOpen={modalOpen} />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <Box>
        {/* homeButton */}
        <Link to="/">
          <Button
            width="50px"
            height="30px"
            fontSize="12px"
            border="1px solid white"
            borderRadius="6px"
            backgroundColor="transparent"
            colorScheme="gray.200"
            marginLeft="300px"
          >
            <HStack justifyContent="center" alignItems="center">
              <MdOutlineArrowBackIos />
              {/* <Text>Home</Text> */}
            </HStack>
          </Button>
        </Link>
        {/* Form start from here*/}
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            padding="10px"
            width="350px"
            name="title"
            placeholder="Expenditure Name"
            value={expenseState.title}
            onChange={onChange}
          />
          <Box
            className="Form-add-button"
            paddingTop="50px"
            paddingLeft="280px"
            color="white"
          >
            <Stack direction="row" spacing={4}>
              <Button
                width="73px"
                display="flex"
                onClick={handleSubmit}
                border="1px solid white"
                colorScheme="green"
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
    </Box>
  );
};

export default Edit;
