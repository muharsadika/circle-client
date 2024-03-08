import { RootState } from "@/store/type/RootState";
import {
    Avatar,
    Box,
    Button,
    Card,
    Flex,
    HStack,
    Stack,
    Text
} from "@chakra-ui/react"
import { VscVerifiedFilled } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useGetUser } from "../hooks/GetUserHook";

export default function ProfileFeature() {
    const user = useSelector((state: RootState) => state.auth)
    console.log("ini ProfileFeature USER: ", user);
    const { GetUser, isLoading } = useGetUser();


    if (isLoading) {
        return <div>Loading...</div>
    }
    const { following, followers } = GetUser
    return (
        <Card bg="whiteAlpha.200" p={4}>
            <Text color="white">My Profile</Text>

            <Box
                pos="relative"
                h="100px"
                mt={3}
                rounded="xl"
                // bg={"green"}
                bgImage={`url(https://th.bing.com/th/id/OIP.ZGNLwbqm0mRGg58CZmxdMAHaEo?pid=ImgDet&rs=1)`}
            >
                <Box
                    pos="absolute"
                    bottom={-10}
                    left={4}
                    p={1}
                    bg="blackAlpha.800"
                    rounded="full"
                >
                    <Avatar size="xl" name={user?.full_name} src={user?.profile_picture} />
                </Box>
            </Box>

            <Flex justify="right">
                <Button
                    color="white"
                    size="lg"
                    rounded="full"
                    variant="outline"
                    mt={5}
                    w="fit-content"
                    _hover={{ bg: 'gray' }}
                >
                    Edit Profile
                </Button>
            </Flex>

            <Stack spacing={0}>
                <Text mt={-5} fontSize="2xl" fontWeight="semibold" color="white" display={"flex"} alignItems={"center"} gap={1}>
                    {user?.full_name} <span style={{ color: "#1D9BF0" }}><VscVerifiedFilled /></span>
                </Text>
                <Text fontSize='md' fontWeight={"thin"} color='whiteAlpha.600'>@{user?.username}</Text>
                <Text fontSize='lg' color='whiteAlpha.800' mt={5}>{user?.bio}</Text>
                <HStack fontSize='lg' mt={5}>
                    <HStack>
                        <Text color='whiteAlpha.800'>{following.length}</Text>
                        <Text color='whiteAlpha.600'>Following</Text>
                    </HStack>
                    <HStack>
                        <Text color='whiteAlpha.800'>{followers.length}</Text>
                        <Text color='whiteAlpha.600'>Followers</Text>
                    </HStack>
                </HStack>
            </Stack>
        </Card>
    )
}



// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { Box, Text, Avatar } from '@chakra-ui/react'
// import { useGetUser } from '../hooks/GetUserHook';
// import { UserType } from '@/Types/UserType';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/type/RootState';

// export default function ProfileFeature() {
//     const { GetUser } = useGetUser();
//     const user = useSelector((state: RootState) => state.auth)
//     return (
//         <>
//             <Box>
//                 <Text color="white">My Profile</Text>
//                 <Box
//                     pos="relative"
//                     h="70px"
//                     mt={3}
//                     rounded="xl"
//                     bg={"green"}
//                 >
//                     <Box
//                         pos="absolute"
//                         bottom={-6}
//                         left={4}
//                         p={1}
//                         bg="blackAlpha.800"
//                         rounded="full"
//                     >
//                         <Avatar size="md" name={user?.full_name} src={user?.profile_picture} />
//                     </Box>
//                     <Box>
//                         @{user?.username}
//                     </Box>
//                 </Box>
//             </Box>
//         </>
//     )
// }
