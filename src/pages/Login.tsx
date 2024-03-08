import { useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import FormLoginFeature from "@/features/components/FormLoginFeature";


export default function Login() {
	const navigate = useNavigate();

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			marginTop={"50px"}
			color={"white"}
		>

			<FormLoginFeature />

			<Box display={"flex"} gap={2}>
				<Text> Don't have an account yet? </Text>
				<Text color={"messenger.500"} cursor={"pointer"} onClick={() => navigate("/register")}> Create account </Text>
			</Box>

		</Box>
	);
}
