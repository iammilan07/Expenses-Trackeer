import { Box } from "@chakra-ui/react";
import { Balance } from "../../components/balance/Balance";
import Expenselist from "../../components/expense-list/Expenselist";
import { TotalExpense } from "../toalExpense/TotalExpense";

const Home = () => {
  return (
    <Box>
      <Balance />
      <Expenselist />
    </Box>
  );
};

export default Home;
