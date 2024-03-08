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
import { useGetUser } from "../../features/hooks/GetUserHook";

export default function ProfileFeature() {
    const user = useSelector((state: RootState) => state.auth)
    console.log("ini ProfileFeature USER: ", user);
    const { GetUser, isLoading } = useGetUser();


    if (isLoading) {
        return <div>Loading...</div>
    }
    const { following, followers } = GetUser
    return (
        <Card
            background="whiteAlpha.200"
            padding={3}
        >
            <Text color="white">My Profile</Text>

            <Box
                pos="relative"
                h="70px"
                mt={3}
                rounded="xl"
                bgImage={"https://th.bing.com/th/id/OIP.ZGNLwbqm0mRGg58CZmxdMAHaEo?pid=ImgDet&rs=1"}
            // https://www.bing.com/images/search?view=detailV2&ccid=jCv4NnCA&id=B33187030CD2D8EE1D94B7C15DC3ED9CA6E569DF&thid=OIP.jCv4NnCAIMajzM4EsPyL-QAAAA&mediaurl=https%3a%2f%2fi.pinimg.com%2f736x%2f55%2f76%2f22%2f5576227d98fd1f39766045e053607cf5.jpg&exph=296&expw=474&q=mac+os+wallpaper+green&simid=608035578628625932&FORM=IRPRST&ck=3ED2E231B3002AB78BE112BCA9D10D4B&selectedIndex=6&qft=+filterui%3aimagesize-medium
            // https://www.bing.com/images/search?view=detailV2&ccid=ZGNLwbqm&id=D91A5FBC82886ECBB4BCE4F0612EE7A90C6F7B00&thid=OIP.ZGNLwbqm0mRGg58CZmxdMAHaEo&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp8970247.jpg&exph=1600&expw=2560&q=mac+os+wallpaper+green&simid=608040045375746259&FORM=IRPRST&ck=3E13F3BD3ECFE7E4F81FB15EDC0F93FE&selectedIndex=2&qft=+filterui%3aimagesize-large&ajaxhist=0&ajaxserp=0
            >
                <Box
                    pos="absolute"
                    bottom={-6}
                    left={4}
                    p={1}
                    bg="blackAlpha.800"
                    rounded="full"
                >
                    <Avatar size="md" name={user?.full_name} src={user?.profile_picture} />
                </Box>
            </Box>

            <Flex justify="right" mt={-6}>
                <Button
                    color="white"
                    size="xs"
                    rounded="full"
                    variant="outline"
                    mt={8}
                    w="fit-content"
                    _hover={{ bg: 'gray' }}
                >
                    Edit Profile
                </Button>
            </Flex>

            <Stack spacing={0}>
                <Text mt={1} fontSize="lg" fontWeight="semibold" color="white" display={"flex"} alignItems={"center"} gap={1}>
                    {user?.username} <span style={{ color: "#1D9BF0" }}><VscVerifiedFilled /></span>
                </Text>
                <Text fontSize='xs' color='whiteAlpha.600'>@{user?.username}</Text>
                <Text fontSize='sm' color='whiteAlpha.800' mt={2}>{user?.bio}</Text>
                <HStack fontSize='sm' mt={5} gap={5}>
                    <HStack gap={1}>
                        <Text color='whiteAlpha.800'>{following.length}</Text>
                        <Text color='whiteAlpha.600'>Following</Text>
                    </HStack>
                    <HStack gap={1}>
                        <Text color='whiteAlpha.800'>{followers.length}</Text>
                        <Text color='whiteAlpha.600'>Followers</Text>
                    </HStack>
                </HStack>
            </Stack>
        </Card>
    )
}