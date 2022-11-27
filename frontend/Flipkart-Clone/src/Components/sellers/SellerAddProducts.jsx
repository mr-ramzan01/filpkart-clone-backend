import { useFormik } from "formik";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    Input,
    VStack
} from "@chakra-ui/react";

export default function SellerAddProducts() {
    const formik = useFormik({
        initialValues: {
            category_name: "",
            title: "",
            rememberMe: false
        },
        onSubmit: (values) => {
            delete values.email 
            delete values.password
            alert(JSON.stringify(values, null, 2))
        }
    });
    return (
        <Flex bg="gray.100" align="center" justify="center" h="80vh">
            <Box bg="white" p={6} rounded="md">
                <form onSubmit={formik.handleSubmit}>
                    <Grid spacing={4} templateColumns='repeat(3, 1fr)' gap={6} align="flex-start">
                        <FormControl>
                            <FormLabel>Category Name</FormLabel>
                            <Input
                                id="category_name"
                                name="category_name"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.category_name}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input
                                id="title"
                                name="title"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.title}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Image</FormLabel>
                            <Input
                                id="image"
                                name="image"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.image}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Old Price</FormLabel>
                            <Input
                                id="old_price"
                                name="old_price"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.old_price}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>New Price</FormLabel>
                            <Input
                                id="new_price"
                                name="new_price"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.new_price}
                            />
                        </FormControl>
                        
                        <FormControl>
                            <FormLabel>Warranty</FormLabel>
                            <Input
                                id="warranty"
                                name="warranty"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.warranty}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Delivery Type</FormLabel>
                            <Input
                                id="delivery_type"
                                name="delivery_type"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.delivery_type}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Size</FormLabel>
                            <Input
                                id="size"
                                name="size"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.size}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Quantity</FormLabel>
                            <Input
                                id="quantity"
                                name="quantity"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.quantity}
                            />
                        </FormControl>
                    </Grid> 
                        <Box width={'50%'} m='auto'>
                        <Checkbox
                            id="rememberMe"
                            name="rememberMe"
                            onChange={formik.handleChange}
                            isChecked={formik.values.rememberMe}
                            colorScheme="purple"
                            m={4}
                        >
                            Remember me?
                        </Checkbox>
                        <Button type="submit" bg="rgb(40, 116, 240)" color={'white'} width="full">
                            Add Product
                        </Button>
                        </Box>
                </form>
            </Box>
        </Flex>
    );
}