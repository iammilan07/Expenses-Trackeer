import { Box, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";


import {
  selectExpenseList,
  selectExpenseQuery,
  selectMappedList,
} from "../../redux/index/index";

import Card from "./Card";

const Expenselist = () => {

  const list = useSelector(selectMappedList);

  const query = useSelector(selectExpenseQuery);

  const notifySuccess = () => toast.success("Deleted Successfully");

  return <ul>
    {list && Object.keys(list).map((key: any) => {
      return <li key={key}>
        <p>{key}</p>
        {list[key]?.length !== 0 && list[key]?.map((expense: any, index: number) => {
          return <Card key={index} expense={expense} notifySuccess={notifySuccess} />
        })}
      </li>
    }
    )

    }
  </ul>

};

export default Expenselist;
