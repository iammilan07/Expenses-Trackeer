import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import { selectExpenseList } from "../../redux/index/index";
import DatePicker from "react-datepicker";
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css'

const Details = () => {

    const list = useSelector(selectExpenseList);


    const [selectedDate, setSelectedDate] = useState(new Date())

    // let mapped = {}
    return (
        <Box>
            {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
            <Link to="/">
                <Button
                    border="1px solid black"
                    borderRadius="6px"
                    backgroundColor='cyan.400'
                    marginLeft="735px"
                >
                    <HStack
                        justifyContent="center"
                        alignItems="center"
                    >
                        <AiOutlineHome />
                        <Text>Home</Text>
                    </HStack>

                </Button>
            </Link>
            <Text textAlign='center' paddingTop='25px'>Expenses Details</Text>
            <Box textAlign='center' paddingTop='20px'>
                <DatePicker selected={selectedDate} onChange={(date: Date) => setSelectedDate(date)} dateFormat="yyyy/MM/dd" maxDate={new Date()} placeholderText="Select Date" />
            </Box>

            {list.map((expense: any) => {
                console.log(expense)

            })}


            {/* {list.map((expense: any) => {
                if (!mapped[expense.createdAt]) {
                    mapped[expense.createdAt] = [expense];
                } else {
                    mapped[expense.createdAt].push(expense);
                })
            }) */}

        </Box>
    )
}

export default Details