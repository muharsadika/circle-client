import { FormControl, Input, Text, Button, Box } from "@chakra-ui/react";
import { FormLoginHook } from "../hooks/FormLoginHook";


export default function FormLoginFeature() {
	const { handleChange, handleLogin } = FormLoginHook();

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

			<Text color={"messenger.500"} fontSize={"3xl"} fontWeight={"bold"}>
				Circle
			</Text>

			<Text fontSize={"2xl"} fontWeight={"bold"} display={"flex"} gap={1}>
				<Text>Login</Text>
				<Text color="messenger.500">Circle</Text>
			</Text>

			<Input
				placeholder="Username"
				name="username"
				onChange={handleChange}
			/>

			<Input
				type="password"
				placeholder="Password"
				name="password"
				onChange={handleChange}
				onKeyDown={handleLogin}
				onKeyPress={(event) => {
					if (event.key === "Enter") {
						handleLogin();
					}
				}}
			/>

			<Box display="flex" justifyContent={"flex-end"}>

				<Text>Forgot password?</Text>

			</Box>

			<Button
				backgroundColor={"messenger.500"}
				colorScheme="messenger.500"
				color={"white"}
				onClick={handleLogin}>
				Login
			</Button>

		</FormControl>
	);
}
