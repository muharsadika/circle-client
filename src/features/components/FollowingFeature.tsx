/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Avatar,
	Box,
	// Button,
	Card,
	CardBody,
	CardHeader,
	Flex,
	Heading,
	Stack,
	StackDivider,
	Text,
} from "@chakra-ui/react";
import { useGetUser } from "../hooks/GetUserHook";
// import { API } from "@/libs/API";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useState } from "react";

// type UserType = {
// 	id: number;
// 	full_name: string;
// 	username: string;
// 	profile_picture: string;
// 	following: any[];
// }

export default function FollowingFeature(
	// { id }: UserType
	) {
	const { GetUser, isLoading } = useGetUser();

	// const [followId, setFollowId] = useState({
	// 	user_id: id
	// });

	// const queryClient = useQueryClient();

	// const { mutate: handleFollow } = useMutation({
	// 	mutationFn: () => {
	// 		return API.post(`follow`, followId);
	// 	},
	// 	onSuccess: () => {
	// 		// queryClient.invalidateQueries({ queryKey: ["Users"] });
	// 		queryClient.invalidateQueries({ queryKey: ["User"] });
	// 		queryClient.invalidateQueries({ queryKey: ["Follow"] });
	// 	},
	// 	onError: (error) => {
	// 		console.log(error);
	// 	},
	// });

	// function handleClick() {
	// 	setFollowId({ user_id: id });
	// 	handleFollow();
	// }

	if (isLoading) return <div>Loading...</div>;
	const { following } = GetUser;
	// const isFollowing = following.some((follow: any) => follow.id === id);
	return (
		<Box>
			<Card
				border={"solid 1px grey"}
				bg={"transparent"}
				color={"white"}
			>
				<CardHeader>
					<Heading size="xs" fontWeight={"thin"} color={"yellow.300"}>
						YOUR FOLLOWING: {following.length}
					</Heading>
				</CardHeader>
				<CardBody>
					<Stack divider={<StackDivider />} spacing="4">
						{following?.map((following: any) => (
							<Box key={following.id}>
								<Flex>
									<Flex gap="3" width={"50%"}>

										<Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
											<Avatar
												name={following.full_name}
												src={following.profile_picture}
												size="sm"
											/>
											<Box>
												<Text fontWeight={"normal"} fontSize={"lg"}>
													{following.full_name}
												</Text>
												<Text fontWeight={"thin"} fontSize={"sm"} color={"whiteAlpha.700"} mt={-1}>
													@{following.username}
												</Text>
												{/* <Heading size="xs"></Heading> */}
												<Text pt="2" fontWeight={"normal"} fontSize="md">
													{following.bio}
												</Text>
											</Box>
										</Flex>

										{/* <Flex alignItems={"center"}>
											<Button
												_hover={{ bg: 'whatsapp' }}
												onClick={handleClick}
												variant='outline'
												rounded='full'
												color={isFollowing ? "white" : 'whiteAlpha.700'}
												// color={"white"}
												size='sm'
											>
												{isFollowing ? "Following" : 'Follow'}
											</Button>
										</Flex> */}

									</Flex>
								</Flex>
							</Box>
						))}
					</Stack>
				</CardBody>
			</Card>
		</Box>
	);
}

//mau buat tombol follow di page follow