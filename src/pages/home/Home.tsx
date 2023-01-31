import { Box } from "@chakra-ui/react";
import { Balance } from "../../components/balance/Balance";
import Expenselist from "../../components/expense-list/Expenselist";
import Header from "../../components/header";
import Announcement from "../../components/marque/Announcement";

const Home = () => {
  return (
    <Box>
      <Header />
      <Announcement />
      <Balance />
      <Expenselist />
    </Box>
  );
};

export default Home;
