import { Box, Button, Flex, FormLabel, Stack, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { addCategory } from "../../store/category/slice";
import { useForm } from "react-hook-form";
import "../../assets/styles/SStyle.css";
import { AiOutlinePlus } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Addcategory = () => {
  const notifySuccessAdd = () => toast.success("Category added Successfully");
  //reacthookfrom
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //dispatch
  const dispatch = useDispatch();

  //function
  const onhandleSubmit = (data: any) => {
    dispatch(addCategory(data));
    notifySuccessAdd();
    reset();
  };

  return (
    <Box>
      <Flex p={3} alignItems="center" justifyContent="space-between">
        <Text fontSize="21px" fontWeight="500" as="b">
          Add Your Desired Category..
        </Text>
      </Flex>
      <form onSubmit={handleSubmit(onhandleSubmit)}>
        <ToastContainer
          position="bottom-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />
        <FormLabel>Add Category</FormLabel>
        <Box marginTop="5px" backgroundColor="transparent" width="350px">
          <input
            placeholder="Add-Category"
            style={{
              padding: "10px",
              color: "white",
              height: "40px",
              borderRadius: "7px",
            }}
            {...register("title", { required: true, maxLength: 20 })}
          />
        </Box>
        {errors?.title?.type === "required" && (
          <p style={{ color: "red" }}>This field is required!! ⚠</p>
        )}
        <FormLabel marginTop="25px">Add Color</FormLabel>
        <Box width="350px" marginTop="5px">
          <input
            placeholder="Add-Color"
            style={{
              padding: "10px",
              color: "white",
              height: "40px",
              borderRadius: "7px",
            }}
            {...register("color", { pattern: /^[A-Za-z]+$/i })}
          />
        </Box>
        {errors?.color?.type === "pattern" && (
          <p className="msg">Alphabetical characters only</p>
        )}
        <Box
          className="Form-add-button"
          paddingTop="50px"
          paddingLeft="280px"
          color="white"
        >
          <Stack direction="row" spacing={4}>
            <Button
              colorScheme="green"
              type="submit"
              width="73px"
              display="flex"
              border="1px solid white"
              padding="2px 8px"
              borderRadius="6px"
              cursor="pointer"
              color="white"
              leftIcon={<AiOutlinePlus />}
              variant="solid"
            >
              Add
            </Button>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default Addcategory;
