import React from "react";
import moment from "moment/moment";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteExpense, editExpense } from "../../redux/index/index";
const Card = (props: any) => {
  const { expense, notifySuccess } = props;
  const time = moment(expense?.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    notifySuccess();
    dispatch(deleteExpense(expense));
  };
  const handleEdit = () => {
    dispatch(editExpense(expense))
  }

  return (
    <Box
      className="card"
      borderRight={`6px solid ${expense?.category?.color}`}
      backgroundColor="white"
      padding="12px"
      margin="2px 0px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box className="card-image-container" >
        <Image
          src={expense?.category?.icon}
          alt={expense?.category?.title}
          height="40px"
        />
      </Box>
      < Box
        className="card-info"
        display="flex"
        flex="1"
        flexDirection="column"
        marginLeft="12px"
      >
        <Text className="card-title" fontSize="20px" >
          {expense?.title}
        </Text>
        < Text className="card-time" color="gray" fontSize="12px" >
          {time}
        </Text>
      </Box>
      <Box
        className="card-right"
        display="flex"
        flexDirection="column-reverse"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Box>
          <Text className="card-amount" fontSize="20px" fontWeight="500" >
            RS {expense?.amount}
          </Text>
        </Box>

        <HStack>
          <Text cursor="pointer" className="delete-icon" fontSize="16px" >
            <AiOutlineDelete onClick={handleDelete} />
          </Text>

          <Text cursor="pointer" className="delete-icon" fontSize="16px" >
            <AiOutlineEdit onClick={handleEdit} />
          </Text>
        </HStack>
      </Box>

    </Box>
  );
};

export default Card;
