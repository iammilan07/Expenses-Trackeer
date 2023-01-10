import { Box } from "@chakra-ui/react";
import React from "react";
import AddForm from "../../components/add-form/AddForm";
import Topfold from "../../components/topfold/Topfold";


const Addexpense = () => {
  return (
    <Box className="add-expense" margin="auto">
      <Topfold />
      <AddForm />

    </Box>
  );
};

export default Addexpense;
