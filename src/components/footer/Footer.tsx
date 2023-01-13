import { Box, Link, Tab, Tabs, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsBookmarkPlus } from 'react-icons/bs'
import { MdAddShoppingCart } from 'react-icons/md'


const Footer = () => {
  return (
    <Box
      // width="100%"
      paddingLeft='85px'
      textAlign='center'
      position="fixed"
      bottom="0"
      justifyContent="center"
      alignItems="center"
    // paddingBottom="6px"
    // paddingRight="450px"
    >
      <Box border='1px solid black' borderRadius='10px' width='200px' backgroundColor='white'>
        <Tabs justifyContent='space-between' variant='soft-rounded' colorScheme='green' display='flex'>

          <Link href='/'>
            <Tab>
              <AiOutlineHome />
            </Tab>
          </Link>
          <Link href="add-expense">
            <Tab>
              <BsBookmarkPlus />
            </Tab>
          </Link>
          <Link href="add-category">
            <Tab>
              <MdAddShoppingCart />
            </Tab>
          </Link>
          <Link href="details">
            <Tab>
              <BiCommentDetail />
            </Tab>
          </Link>


        </Tabs>
      </Box>

      <Box>
        <Text>Made with ❤️ in Reactredux!!</Text>
      </Box>
    </Box >
  );
};

export default Footer;
