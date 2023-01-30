import { Box } from "@chakra-ui/react";
import { Balance } from "../../components/balance/Balance";
import Expenselist from "../../components/expense-list/Expenselist";
import Announcement from "../../components/marque/Announcement";

const Home = () => {
  return (
    <Box>
      <Announcement />
      <Balance />
      <Expenselist />
    </Box>
  );
};

export default Home;
