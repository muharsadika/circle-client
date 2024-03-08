import { FormControl, Input, Text, Button } from "@chakra-ui/react";
import { FormRegisterHook } from "../hooks/FormRegisterHook";


export default function FormRegisterFeature() {
    const { handleChange, handleRegister } = FormRegisterHook();

    return (
        <FormControl
            isRequired
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            width={"350px"}
            bg={"transparent"}
            color={"white"}
            border={"1px solid white"}
            borderRadius={10}
            padding={5}
        >

            <Text color={"messenger.500"} fontSize={"2xl"} fontWeight={"bold"}>
                Circle
            </Text>

            <Text fontSize={"2xl"} fontWeight={"bold"} display={"flex"} gap={1}>
                <Text>Create Account</Text>
                <Text color={"messenger.500"}>Circle</Text>
            </Text>

            <Input placeholder="Full Name" name="full_name" onChange={handleChange} />
            <Input placeholder="Email" name="email" onChange={handleChange} />
            <Input placeholder="Username" name="username" onChange={handleChange} />
            <Input type="password" placeholder="Password" name="password" onChange={handleChange}
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        handleRegister();
                    }
                }} />

            <Button
                backgroundColor={"messenger.500"}
                colorScheme="messenger.500"
                color={"white"}
                onClick={handleRegister}>
                Create
            </Button>

        </FormControl>
    );
}
