/* eslint-disable @typescript-eslint/no-explicit-any */
import { API } from "@/libs/API";
import { Avatar, Box, Button, Card, CardBody, Flex, Stack, StackDivider, Text } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useGetUser } from "../hooks/GetUserHook";

export default function SearchFeature({ user_id, full_name, username, profile_picture }: any) { //props bisa dipisah lagi, buat pake type
    const [followId, setFollowId] = useState({
        user_id: user_id,
    });

    const { GetUser, isLoading } = useGetUser();

    const queryClient = useQueryClient();

    const { mutate: handleFollow } = useMutation({
        mutationFn: () => {
            return API.post(`follow`, followId);
        },
        onSuccess: () => {
            // queryClient.invalidateQueries({ queryKey: ["Users"] });
            queryClient.invalidateQueries({ queryKey: ["User"] });
            queryClient.invalidateQueries({ queryKey: ["Follow"] });
        },
        onError: (error) => {
            console.log(error);
        },
    });


    function handleClick() {
        setFollowId({ user_id: user_id });
        handleFollow();
    }

    if (isLoading) return <div>Loading...</div>;

    const { following } = GetUser;


    const isFollowing = following.some((follow: any) => follow.id === user_id);

    return (

        <Box>
            <Card
                // border={"solid 1px grey"}
                bg={"transparent"}
                color={"white"}
            >
                {/* <CardHeader>
                    <Heading size="xs" fontWeight={"thin"} color={"yellow.300"}>
                        YOUR FOLLOWING: {following.length}
                    </Heading>
                </CardHeader> */}
                <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                            <Flex gap="4">
                                <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
                                    <Avatar
                                        name={full_name}
                                        src={profile_picture}
                                        size="sm"
                                    />
                                    <Box>
                                        <Text fontWeight={"regular"} fontSize={"lg"}>
                                            {full_name}
                                        </Text>
                                        <Text fontWeight={"thin"} fontSize={"xs"}>
                                            @{username}
                                        </Text>
                                    </Box>
                                </Flex>

                                <Flex alignItems={"center"}>
                                    <Button
                                        _hover={{ bg: 'whatsapp' }}
                                        onClick={handleClick}
                                        variant='outline'
                                        rounded='full'
                                        color={isFollowing ? "white" : 'whiteAlpha.700'}
                                        size='sm'
                                    >
                                        {isFollowing ? "Following" : 'Follow'}
                                    </Button>
                                </Flex>
                            </Flex>
                        </Box>

                    </Stack>

                </CardBody>
            </Card>

        </Box>

        // <HStack justify='space-between' w={"full"} my={5}>
        //     <HStack spacing={3}>
        //         <Avatar size='sm' src={profile_picture} />
        //         <Stack spacing={-4}>
        //             <Text fontSize='xs' color='white'>{full_name}</Text>
        //             <Text color='whiteAlpha.600' fontSize='xs'>@{username}</Text>
        //         </Stack>
        //     </HStack>
        //     <Button
        //         _hover={{ bg: 'whatsapp' }}
        //         onClick={handleClick}
        //         variant='outline'
        //         rounded='full'
        //         color={isFollowing ? "white" : 'whiteAlpha.700'}
        //         size='sm'
        //     >
        //         {isFollowing ? "Following" : 'Follow'}
        //     </Button>
        // </HStack>
    );
}







