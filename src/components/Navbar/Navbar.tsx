import { Box, Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { TbUserSearch } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { AUTH_LOGOUT } from "@/store/RootReducer";
import { Link, useNavigate } from "react-router-dom";


export default function NavbarComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout() {
        // dispatch({ type: AUTH_LOGOUT });
        dispatch(AUTH_LOGOUT());
        navigate("/login");
    }

    return (
        <>
            <Stack h="full" justify="space-between" >
                <Box>
                    <Heading color="messenger.500">circle</Heading>
                    <Stack my={8} spacing={10}>

                        <Link to={`/home`}>
                            <HStack cursor="pointer" color="white">
                                <AiOutlineHome size={40} />
                                <Text fontSize="lg">Home</Text>
                            </HStack>
                        </Link>
                        <Link to={`/search`}>
                            <HStack cursor="pointer" color="white">
                                <TbUserSearch size={40} />
                                <Text fontSize="lg">Search</Text>
                            </HStack>
                        </Link>
                        <Link to={`/follow`}>
                            <HStack cursor="pointer" color="white">
                                <AiOutlineHeart size={40} />
                                <Text fontSize="lg">Follows</Text>
                            </HStack>
                        </Link>
                        <Link to={`/profile`}>
                            <HStack cursor="pointer" color="white">
                                <AiOutlineUser size={40} />
                                <Text fontSize="lg">Profile</Text>
                            </HStack>
                        </Link>
                    </Stack>

                    <Button size='lg' rounded="full" colorScheme="messenger" w={"full"}>
                        Create Post
                    </Button>
                </Box>

                <Button
                    fontWeight="light"
                    color="white"
                    display="flex"
                    justifyContent="start"
                    leftIcon={<BiLogOut size={30} />}
                    colorScheme="teal"
                    variant="unstyled"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Stack>
        </>
    )
}