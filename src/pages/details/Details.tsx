import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addExpense } from "../../redux/index/index"
import { AiOutlineHome } from "react-icons/ai"

const Details = (data: any) => {
    const dispatch = useDispatch();
    const item = () => {

        dispatch(addExpense(data))
    }
    return (
        <div>
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

        </div>
    )
}

export default Details