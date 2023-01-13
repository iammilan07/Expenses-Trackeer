import { Box, Button, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Successmodal from "../../components/add-form/Categorysucess";
import { AiOutlinePlus } from 'react-icons/ai';
import { addCategory } from '../../store/category/slice';


const Addcategory = () => {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);

    const handleTitle = (e: any) => {
        setTitle(e.target.value);
    };
    const handleColor = (e: any) => {
        setColor(e.target.value);
    };


    const handleSubmit = (e: any) => {


        const data = {
            title,
            color,

        };

        dispatch(addCategory(data));
        setModalOpen(!modalOpen);
    };

    return (
        <FormControl className="add-fromm" marginTop='50px'>
            <Successmodal modalOpen={modalOpen} />
            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
            <Text marginTop='80px' as='b' textAlign='center' color='white' paddingBottom='10px'>Add your own category!!</Text>
            <Box justifyContent='space-between' marginTop='20px' >
                <Box className="form-item">
                    <FormLabel>Category-Title</FormLabel>

                    <Input
                        width='300px'
                        placeholder="Add Category Name"
                        value={title}
                        onChange={(e) => handleTitle(e)}
                    />
                </Box>
                <Box className="form-item" marginTop='5px'>
                    <FormLabel>Category-Color</FormLabel>

                    <Input
                        width='300px'
                        placeholder="Add Category Color"
                        value={color}
                        onChange={(e) => handleColor(e)}

                    />

                </Box>


            </Box>

            <Box
                className="Form-add-button" paddingTop="50px" color="white">
                <Stack direction='row' spacing={4}>
                    <Button colorScheme='blue'

                        display="flex"
                        onClick={handleSubmit}
                        border="1px solid black"
                        padding="2px 8px"
                        borderRadius="6px"
                        cursor="pointer"
                        color="white" leftIcon={<AiOutlinePlus />}
                        variant='solid'>
                        Add
                    </Button>

                </Stack>
            </Box>
        </FormControl>
    )
}

export default Addcategory

