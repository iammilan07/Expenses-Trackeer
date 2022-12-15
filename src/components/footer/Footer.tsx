import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      width="100%"
      position="fixed"
      bottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingBottom="6px"
      paddingRight="450px"
    >
      <Text>Made with ❤️ by Milan.</Text>
    </Box>
  );
};

export default Footer;
