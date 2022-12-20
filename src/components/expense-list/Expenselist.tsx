import { useSelector } from "react-redux";
import { toast } from "react-toastify";


import {
  selectMappedList,
} from "../../redux/index/index";

import Card from "./Card";

const Expenselist = () => {

  const list = useSelector(selectMappedList);


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
