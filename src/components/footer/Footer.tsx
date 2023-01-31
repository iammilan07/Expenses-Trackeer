import { Box, Tab, Tabs, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsBookmarkPlus } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
const Footer = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <Box>
      {/* {isLargerThan1280 ? ( */}
      <Box
        zIndex="0"
        position="fixed"
        // left="0"
        width="100%"
        // paddingLeft="435px"
        bottom="-1"
      >
        <Box alignItems="center">
          <Box>
            <Tabs
              backgroundColor="white"
              alignItems="center"
              width="347px"
              variant="soft-rounded"
              colorScheme="green"
              display="flex"
            >
              <Link to="/">
                <Tab fontSize="24px" borderRadius="0px" flexDirection="column">
                  <AiOutlineHome />
                  <Text fontSize="xs">Home</Text>
                </Tab>
              </Link>
              <Link to="add-expense">
                <Tab borderRadius="0px" fontSize="24px" flexDirection="column">
                  <BsBookmarkPlus />
                  <Text fontSize="xs">Add-Expense</Text>
                </Tab>
              </Link>
              <Link to="add-category">
                <Tab borderRadius="0px" fontSize="24px" flexDirection="column">
                  <MdAddShoppingCart />
                  <Text fontSize="xs">Add-Category</Text>
                </Tab>
              </Link>
              <Link to="details">
                <Tab borderRadius="0px" fontSize="24px" flexDirection="column">
                  <BiCommentDetail />
                  <Text fontSize="xs">Details</Text>
                </Tab>
              </Link>
            </Tabs>
          </Box>
        </Box>
      </Box>
      {/* ) : (
        <Box
          zIndex="0"
          position="fixed"
          left="0"
          width="100%"
          //  paddingLeft="435px"
          // width="50%"
          bottom="-1"
        >
          <Box justifyContent="center" alignItems="center">
            <Box backgroundColor="white">
              <Tabs
                justifyContent="space-between"
                width="100%"
                variant="soft-rounded"
                colorScheme="green"
                display="flex"
              >
                <Link to="/">
                  <Tab
                    fontSize="24px"
                    borderRadius="0px"
                    flexDirection="column"
                  >
                    <AiOutlineHome />
                    <Text fontSize="xs">Home</Text>
                  </Tab>
                </Link>
                <Link to="add-expense">
                  <Tab
                    borderRadius="0px"
                    fontSize="24px"
                    flexDirection="column"
                  >
                    <BsBookmarkPlus />
                    <Text fontSize="xs">Add-Expense</Text>
                  </Tab>
                </Link>
                <Link to="add-category">
                  <Tab
                    borderRadius="0px"
                    fontSize="24px"
                    flexDirection="column"
                  >
                    <MdAddShoppingCart />
                    <Text fontSize="xs">Add-Category</Text>
                  </Tab>
                </Link>
                <Link to="details">
                  <Tab
                    borderRadius="0px"
                    fontSize="24px"
                    flexDirection="column"
                  >
                    <BiCommentDetail />
                    <Text fontSize="xs">Details</Text>
                  </Tab>
                </Link>
              </Tabs>
            </Box>
          </Box>
        </Box>
      )} */}
    </Box>
  );
};

export default Footer;
