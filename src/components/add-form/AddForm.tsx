import { Box, Button, FormControl, FormLabel, Image, Input, Stack, } from "@chakra-ui/react";
import { useState } from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { categories } from "../../constants/Addcategories";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Successmodal from "./Successmodal";
import { addExpense } from "../../store/expense";
import { selectCategoryList } from "../../store/category/selectors";



const AddForm = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const cat = categories;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState<any>();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const categoryList = useSelector(selectCategoryList)
  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e: any) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount(0);
      return;
    }
    setAmount(val);
  };
  const handleCategory = (category: any) => {
    setCategory(category);
    setCategoryOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === 0 || !category) {
      const notify = () => toast("Please enter a valid a data");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setModalOpen(!modalOpen);
  };


  return (
    <Box className="add-from">
      <FormControl>
        <Successmodal modalOpen={modalOpen} />
        <ToastContainer
          position="bottom-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />


        <FormLabel >Title</FormLabel>
        <Input
          width='300px'
          placeholder="Expenditure Name"
          value={title}
          onChange={(e) => handleTitle(e)}
        />





        <FormLabel paddingRight='7px'>Amountरु</FormLabel>
        <Input
          className="amount-input"
          placeholder="Enter Amount"
          width='300px'
          value={amount}
          onChange={(e) => handleAmount(e)}
        />




        {/* Category */}
        <Box className="category-container-parent" border='1px solid white' borderRadius='5px' marginTop='15px' width='300px' >
          <Box className="category" >
            <Box

              backgroundColor='transparent'
              width='300px'
              className="category-dropdown"
              cursor="pointer"
              display="flex"
              onClick={() => setCategoryOpen(!categoryOpen)}
            >


              <FormLabel padding='3px'>{category ? category?.title : "Category"}</FormLabel>
              <IoIosArrowDropdown style={{ alignItems: "center" }} />

            </Box>


            {/* categoryopen wala code */}
            {categoryOpen && (
              <Box className="category-container" width='250px'>
                {categoryList.map((category: any) => (
                  <Box

                    className="category-item"
                    style={{
                      borderRight: `5px solid ${category.color}`,
                    }}
                    key={category.id}
                    onClick={() => handleCategory(category)}
                  >
                    <label>{category.title}</label>
                    <Image
                      cursor="pointer"
                      height="20px"
                      src={category.icon}
                      alt={category.title}
                    />
                  </Box>
                ))}
                {cat.map((category: any) => (
                  <Box

                    className="category-item"
                    style={{
                      borderRight: `5px solid ${category.color}`,
                    }}
                    key={category.id}
                    onClick={() => handleCategory(category)}
                  >
                    <label>{category.title}</label>
                    <Image
                      cursor="pointer"
                      height="20px"
                      src={category.icon}
                      alt={category.title}
                    />
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>


        <Box
          className="Form-add-button" paddingTop="50px" paddingLeft="210px" color="white">
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
      </FormControl >
    </Box >
  );
};

export default AddForm;
