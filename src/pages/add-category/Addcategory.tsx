import { Box, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Successmodal from "../../components/add-form/Categorysucess";
import { addCategory } from '../../store/category/slice';
import { useForm } from "react-hook-form";
import "../../assets/styles/SStyle.css"
import { AiOutlinePlus } from "react-icons/ai";

const Addcategory = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const [modalOpen, setModalOpen] = useState(false);

    const onhandleSubmit = (data: any) => {
        dispatch(addCategory(data))
        setModalOpen(!modalOpen);
    }

    return (
        <form onSubmit={handleSubmit(onhandleSubmit)}>
            <Successmodal modalOpen={modalOpen} />
            <label>Add Category</label>


            <Box backgroundColor="transparent" width='350px'>
                <input style={{ color: "white" }}     {...register("title", { required: true, maxLength: 20, })} />
            </Box>
            {errors?.title?.type === "required" && <p style={{ color: "red" }}>This field is required!! ⚠</p>}




            <label>Add Color</label>
            <Box width="350px">
                <input style={{ color: "white" }} {...register("color", { pattern: /^[A-Za-z]+$/i })} />
            </Box>
            {errors?.color?.type === "pattern" && (
                <p className="msg">Alphabetical characters only</p>
            )}

            <Box>
                <Box
                    className="Form-add-button" color="white">
                    <Stack direction='row' spacing={4}>
                        <Button colorScheme='#cb45ed'
                            type="submit"
                            display="flex"
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
            </Box>
        </form >
    )
}

export default Addcategory

