import { AiOutlineCreditCard } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "./header.css";
import { Box, Text, Link } from "@chakra-ui/react";
const Header = () => {
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
    </Box>
  );
};

export default Header;
