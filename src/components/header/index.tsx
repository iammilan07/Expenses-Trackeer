import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Link, Flex, Heading, Text, Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex mb={2} p={3} alignItems="center" justifyContent="space-between">
      <Text fontSize="24px" fontWeight="500" as="b">
        My Expense Tracker!!
      </Text>
      <Box display="flex">
        <Link
          marginRight="10px"
          className="icon"
          href="https://github.com/iammilan07"
          target="_blank"
        >
          <AiFillGithub />
        </Link>
        <Link
          marginRight="10px"
          className="icon"
          href="https://www.instagram.com/iammilan_7"
          target="_blank"
        >
          <AiFillInstagram />
        </Link>
        <Link
          className="icon"
          href="https://www.linkedin.com/in/milan-pandey-606062179/"
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
