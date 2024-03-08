import { useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import FormRegisterFeature from "@/features/components/FormRegisterFeature";


export default function Register() {
	const navigate = useNavigate();

	return (
		<>
			<Box
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
				marginTop={"50px"}
				color={"white"}
			>

				<FormRegisterFeature />

				<Box display={"flex"} gap={2}>
					<Text>Already have account?</Text>
					<Text color="messenger.500" cursor={"pointer"} onClick={() => navigate("/login")}> Login </Text>
				</Box>

			</Box>
		</>
	);

}
