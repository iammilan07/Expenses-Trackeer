import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlinePlusCircle,
  AiFillBackward,
} from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { BiCommentDetail } from "react-icons/bi"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchExpense } from "../../redux/index/index";
import "./topfold.css";


const Topfold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e: any) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };


  return (
    <Box
      className="topfold"
      display="flex"
      justifyContent="space-between"
      margin="6px 12px"
      padding="12px 0px"
    >
      {window.location.pathname === "/" ? (
        <Box
          className="home-topfold"
          display="flex"
          justifyContent="space-between"
          flex="1"
        >
          <Box
            className="searchbar"
            display="flex"
            alignItems="center"
            width="50%"
            backgroundColor="white"
            borderRadius="12px"
          >
            <HStack
              fontSize="28px"
              display="flex"
              alignItems="center"
              marginLeft="6px"
              outline="none"
            >
              <Box>
                <AiOutlineSearch />
              </Box>
              <Input
                width="80%"
                outline="none"
                padding="8px 0px"
                border="white"
                marginLeft="6px"
                backgroundColor="white"
                value={query}
                placeholder="Search for expenses"
                onChange={(e) => handleQuery(e)}
              ></Input>
            </HStack>
          </Box>

          <Link to="details">
            <Box
              background='lightgrey'
              className="add-button"
              border="1px solid black"
              alignItems="center"
              borderRadius="6px"
              height="30px"
              fontSize="15px"
              padding="2px"
              cursor="pointer"
            >
              <HStack>
                <BiCommentDetail />
                <Text>Details</Text>
              </HStack>
            </Box>
          </Link>


          <Link to="add-expense">
            <Box
              background='lightgrey'
              className="add-button"
              border="1px solid black"
              alignItems="center"
              borderRadius="6px"
              height="30px"
              fontSize="15px"
              padding="2px"
              cursor="pointer"
            >
              <HStack>
                <AiOutlinePlusCircle />
                <Text>Add</Text>
              </HStack>
            </Box>
          </Link>

        </Box>
      ) : (
        <Box
          paddingLeft="135px"
          className="add-topfold"
          display="flex"
          justifyContent="space-between"
        >
          <Link to="/">
            <Box
              className="add-topfold-button"
              display="flex"
              alignItems="center"
              fontSize="18px"
              cursor="pointer"
            >
              <AiFillBackward />
              <Text>Back</Text>
            </Box>
          </Link>
          <Link to="/">
            <Box
              className="add-topfold-button"
              display="flex"
              alignItems="center"
              marginLeft="420px"
            >
              <ImCancelCircle />
              <Text>Cancel</Text>
            </Box>
          </Link>
        </Box>
      )}

    </Box>
  );
};

export default Topfold;
