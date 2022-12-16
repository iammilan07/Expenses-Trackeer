import { Box, Button, HStack, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { BiPaperPlane } from "react-icons/bi";
import { categories } from "../../constants/Addcategories";
import { useDispatch } from "react-redux";
import "./addform.css";
import { addExpense } from "../../redux/index/index";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Successmodal from "./Successmodal";


const AddForm = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const cat = categories;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState<any>();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

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
      <Successmodal modalOpen={modalOpen} />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />

      <HStack className="form-item">
        <label>Title</label>
        <Input
          placeholder="Expenditure Name"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </HStack>
      <Box paddingTop="10px">
        <HStack className="form-item">
          <label>Amountरु</label>
          <Input
            className="amount-input"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => handleAmount(e)}
          />
        </HStack>
      </Box>

      <Box className="category-container-parent">
        <Box className="category" >
          <Box
            className="category-dropdown"
            cursor="pointer"
            display="flex"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <Box display="flex" backgroundColor='lightgray' padding="2px 12px"
            >
              <Text border-radius="6px">{category ? category?.title : "Category"}</Text>
              <IoIosArrowDropdown style={{ alignItems: "center" }} />
            </Box>
          </Box>
          {categoryOpen && (
            <Box className="category-container">
              {cat.map((category) => (
                <Box
                  backgroundColor="yellow.200"
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
  );
};

export default AddForm;
