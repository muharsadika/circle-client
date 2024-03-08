import { useState } from "react";
import { useGetUsers } from "@/features/hooks/GetUsersHook";
import {
    Box,
    Input,
    InputGroup,
    Stack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";
import SearchFeature from "@/features/components/SearchFeature";
import { SearchType } from "@/Types/SearchType";

export default function Search() {
    const { GetUsers, isLoading } = useGetUsers();
    const [filtered, setFiltered] = useState<string>("");

    const signInUser = useSelector((state: RootState) => state?.auth);
    const filteredList = GetUsers?.filter((user: SearchType) => {
        const userFullName = `${user.username} ${user.full_name}`.toLowerCase();
        const filterText = filtered.toLowerCase();
        return user.id !== signInUser?.id && userFullName.includes(filterText);
    });

    if (isLoading) return <div>Loading...</div>;
    return (
        <Box py={10} color="gray.100" w={"full"}>
            <Stack>
                <InputGroup size="lg">
                    <Input
                        // rounded="full"
                        focusBorderColor='blue'
                        placeholder="Search user..."
                        value={filtered}
                        onChange={(e) => {
                            setFiltered(e.target.value);
                        }}
                    />
                    {/* <InputRightAddon
                        children="Username or Fullname"
                        bgColor="transparent"
                        // rounded="full"
                    /> */}
                </InputGroup>
            </Stack>

            <Box py={10} w={"80%"} mx={"auto"} my={5}>
                {filteredList.map((user: SearchType) => (
                    <SearchFeature
                        key={user.id}
                        user_id={user.id}
                        username={user.username}
                        full_name={user.full_name}
                        profile_picture={user.profile_picture}
                    />
                ))}
            </Box>
        </Box>
    );
}


// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { useState } from "react";
// import { useGetUsers } from "@/features/hooks/GetUsersHook";
// import {
//     Box,
//     Input,
//     InputGroup,
//     InputRightAddon,
//     Stack,
// } from "@chakra-ui/react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/type/RootState";
// import SuggestedFeature from "@/features/components/SuggestedFeature";
// import { SearchType } from "@/Types/SearchType";

// export default function Search() {
//     const { GetUsers, isLoading } = useGetUsers();
//     const [filtered, setFiltered] = useState<string>("");

//     const signInUser = useSelector((state: RootState) => state?.auth);
//     const List = GetUsers?.filter((user: SearchType) => user.id !== signInUser?.id);


//     if (isLoading) return <div>Loading...</div>;
//     return (
//         <Box color="gray.100">
//             <Stack>
//                 <InputGroup size="sm">
//                     <Input
//                         rounded="full"
//                         placeholder="Search user..."
//                         value={filtered}
//                         onChange={(e) => {
//                             setFiltered(e.target.value);
//                         }}
//                     />
//                     <InputRightAddon
//                         children="Username or Fullname"
//                         bgColor="transparent"
//                         rounded="full"
//                     />
//                 </InputGroup>
//             </Stack>

//             <Box maxW="lg" mx="auto" py="2rem">
//                 {List.map((user: SearchType) => (
//                         <SuggestedFeature
//                             key={user.id}
//                             user_id={user.id}
//                             username={user.username}
//                             full_name={user.full_name}
//                             profile_picture={user.profile_picture}
//                         />
//                     ))}
//             </Box>
//         </Box>
//     );
// }





// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { API } from "@/libs/API";
// import { useState } from "react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useGetUsers } from "@/features/hooks/GetUsersHook";
// import {
//     Avatar,
//     Box,
//     Divider,
//     Flex,
//     Heading,
//     Input,
//     Text,
//     InputGroup,
//     InputRightAddon,
//     Stack,
//     Button,
// } from "@chakra-ui/react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/type/RootState";
// import { useGetFollow } from "@/features/hooks/GetFollowHook";


// type SearchProps = {
//     id: number;
//     username: string;
//     full_name: string;
//     profile_picture: string;
// };

// export default function Search() {
//     const queryClient = useQueryClient();
//     const { GetUsers, isLoading } = useGetUsers();
//     const {GetFollow} = useGetFollow();
//     const [filtered, setFiltered] = useState<string>("");
//     const [followStates, setFollowStates] = useState<{ [userId: number]: boolean }>({});



//     const { mutate: handleFollow } = useMutation({
//         mutationFn: (followId: number) => {
//             return API.post(`follow`, { user_id: followId });
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: ["Users"] });
//             queryClient.invalidateQueries({ queryKey: ["User"] });
//             queryClient.invalidateQueries({ queryKey: ["Follow"] });
//         },
//         onError: (error) => {
//             console.log(error);
//         },
//     });


//     const results =
//         filtered.length > 0
//             ? GetUsers?.filter((user: SearchProps) =>
//                 `${user.username} ${user.full_name}`
//                     .toLowerCase()
//                     .includes(filtered.toLowerCase())
//             )
//             : GetUsers;

//     const handleClick = (user: SearchProps) => {
//         setFollowStates((prevFollowStates) => ({
//             ...prevFollowStates,
//             [user.id]: !prevFollowStates[user.id],
//         }));
//         handleFollow(user.id); // Panggil handleFollow dengan ID pengguna yang sesuai
//     };

//     const auth = useSelector((state: RootState) => state.auth)


//     if (isLoading) return <div>Loading...</div>;
    
//     return (
//         <Box color="gray.100">
//             <Stack>
//                 <InputGroup size="sm">
//                     <Input
//                         rounded="full"
//                         placeholder="Search user..."
//                         value={filtered}
//                         onChange={(e) => {
//                             setFiltered(e.target.value);
//                         }}
//                     />
//                     <InputRightAddon
//                         children="Username or Fullname"
//                         bgColor="transparent"
//                         rounded="full"
//                     />
//                 </InputGroup>
//             </Stack>

//             <Box maxW="lg" mx="auto" py="2rem">
//                 {results ? (
//                     results.map((user: SearchProps) => {
//                         // Jika pengguna yang sedang login memiliki ID yang sama dengan pengguna yang sedang dipetakan, jangan tampilkan pengguna ini
//                         if (user.id === auth.id) {
//                             return null;
//                         }
//                         return (
//                             <Box key={user.id} border={"1px solid red"}>
//                                 <Flex gap="4" py="1rem">
//                                     <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
//                                         <Avatar
//                                             name={user.full_name}
//                                             src={user.profile_picture}
//                                             size="sm"
//                                         />
//                                         <Box>
//                                             <Heading size="sm">{user.full_name}</Heading>
//                                             <Text fontSize="xs" color="whiteAlpha.600">
//                                                 @{user.username}
//                                             </Text>
//                                         </Box>
//                                         <Box>
//                                             <Button
//                                                 _hover={{ bg: 'whatsapp' }}
//                                                 onClick={() => handleClick(user)}
//                                                 variant='outline'
//                                                 rounded='full'
//                                                 color={followStates[user.id] ? "white" : 'whiteAlpha.700'}
//                                                 size='sm'
//                                             >
//                                                 {followStates[user.id] ? "Following" : 'Follow'}
//                                             </Button>
//                                         </Box>
//                                     </Flex>
//                                 </Flex>
//                                 <Divider colorScheme="green" />
//                             </Box>
//                         )
//                     }
//                     )
//                 ) : (
//                     <Box
//                         display="flex"
//                         minH="sm"
//                         alignItems="center"
//                         justifyContent="center">
//                         <Text textAlign="center">Start searching a user</Text>
//                     </Box>
//                 )}
//                 {results?.length === 0 && (
//                     <Box
//                         display="flex"
//                         minH="sm"
//                         alignItems="center"
//                         justifyContent="center">
//                         <Text textAlign="center">User Not Found</Text>
//                     </Box>
//                 )}
//             </Box>
//         </Box>
//     );
// }