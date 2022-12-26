import React from 'react'
import { Box, Button, HStack, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { BiPaperPlane } from "react-icons/bi";
import { categories } from "../../constants/Addcategories";
import { useDispatch } from "react-redux";
import "../../components/add-form/addform.css";
import { addExpense } from "../../redux/index/index";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Successmodal from "../../components/add-form/Categorysucess";


const Addcategory = () => {
    const [categoryOpen, setCategoryOpen] = useState(false);
    const cat = categories;
    const [title, setTitle] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const handleTitle = (e: any) => {
        setTitle(e.target.value);
    };


    const handleSubmit = () => {
        if (title === "") {
            const notify = () => toast("Please enter a valid a data");
            notify();
            return;
        }
        const data = {
            title,

        };

        // dispatch(addExpense(data));
        setModalOpen(!modalOpen);
    };
    return (
        <Box className="add-fromm">
            <Successmodal modalOpen={modalOpen} />
            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
            <Text as='b' textAlign='center' color='blue' paddingBottom='10px'>Add your desire category!!</Text>
            <HStack className="form-item">
                <label>Category-Title</label>

                <Input
                    placeholder="Add Category Name"
                    value={title}
                    onChange={(e) => handleTitle(e)}
                />
            </HStack>



            <Box alignItems='center' cursor="pointer"
                className="Form-add-button" paddingTop="20px" paddingLeft="730px">
                <Button
                    display="flex"
                    onClick={handleSubmit}
                    border="1px solid black"
                    padding="2px 8px"
                    borderRadius="6px"
                    cursor="pointer"

                >
                    <Text cursor="pointer">Add </Text >
                    <BiPaperPlane />
                </Button>
            </Box>
        </Box>
    )
}

export default Addcategory