import { AiOutlineCreditCard } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "./header.css";
import { Box, Text, Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectExpenseList } from "../../redux/index";

const Header = () => {



  // {
  //   list.map((expense: any) => {
  //     console.log(expense)
  //     return
  //     const totall= ()=>{
  //       setTotal({expense.amount})
  //       }
  //   })
  // }
  // const price = list.expense;

  // Object.keys(price)
  // let sum = 0;
  // Object.keys(price).forEach((price, index) => {
  //   return (sum = sum + price[prices].price.length)
  // })




  return (
    <Box className="header-container">
      <Box className="header">
        <Box className="header-logo" >
          <Text width='280px'>Track your Expense</Text>
          <Box
            className="icon"
            display="flex"
            align-items="center"
            margin-left="6px"
          >
            <AiOutlineCreditCard />
          </Box>
        </Box>
        <Box paddingLeft='260px'>
          <Box className="header-button">
            <Link
              margin-right="4px"
              className="icon"
              href="https://github.com/iammilan07"
              target="_blank"
            >
              <AiFillGithub />
            </Link>
          </Box>
        </Box>
      </Box>
      {/* // const price = list.expense;

// Object.keys(price)
// let sum = 0;
// Object.keys(price).forEach((price, index) => {
//   return (sum = sum + price[prices].price.length)
// }) */}
      {/* {
        list.map((expense: any) => {
          const total = expense.amount
          return <Text>Total Expenses={total}</Text>
        })
      } */}

    </Box>
  );
};

export default Header;
