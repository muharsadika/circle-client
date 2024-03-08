/* eslint-disable @typescript-eslint/no-unused-vars */
import NavbarComponent from "@/components/Navbar/Navbar";
import SuggestedComponent from "@/components/Suggested/Suggested";
import FooterComponent from "@/components/Footer/Footer";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import ProfileFeature from "../components/Profile/Profile";

export default function Main({ children }: { children: ReactNode }) {
	return (
		<>
			<Grid templateColumns="1fr 2fr 1fr" gap={5} py={1}>
				<GridItem w={"100%"} px={10} py={3}>
					<NavbarComponent />
				</GridItem>
				<GridItem
					w={"90%"}
					borderX={"1px solid grey"}
				// border={"1px solid grey"}
				// mx={-5}
				// borderRadius={"10px"}
				my={-1}
				// py={-1}
				>
					{children}
				</GridItem>
				<GridItem w={"100%"} display={"flex"} flexDirection={"column"} gap={2} mx={-20}>
					<GridItem>
						<ProfileFeature />
					</GridItem>
					<GridItem>
						<SuggestedComponent />
					</GridItem>
					<GridItem>
						<FooterComponent />
					</GridItem>
				</GridItem>

			</Grid>

			{/*
			<Grid
				// templateColumns="20% 50% 30%"
				height={"100vh"}
				justifyContent={"center"}
				display={"flex"}
				border={"3px solid red"}
			>


				<Box
					display={"flex"}
					width={"15%"}
					height={"fit-content"}
					position={"fixed"}
					left={"30px"}
					paddingTop={"30px"}
					paddingRight={"10px"}
					borderRight={"1px solid gray"}
					h={"100vh"}
					border={"3px solid yellow"}
				>
					<NavbarComponent />
				</Box>

				<Box
					width={"50%"}
					mr={"150px"}
					border={"3px solid blue"}
				>
					{children}
				</Box>

				<Box
					display={"flex"}
					flexDirection={"column"}
					gap={5}
					position={"fixed"}
					right={"5px"}
					top={"0px"}
					paddingTop={"30px"}
					paddingLeft={"15px"}
					borderLeft={"1px solid gray"}
					h={"100vh"}
					width={"25%"}
					border={"3px solid purple"}
				>
					<Box
					// border={"10px solid blue"}
					>
						<ProfileFeature />
					</Box>

					<Box
					// border={"10px solid red"}
					>
						<SuggestedComponent />
					</Box>

					<Box
					// border={"10px solid green"}
					>
						<FooterComponent />
					</Box>
				</Box>
			</Grid>
			*/}
		</>
	);
}
