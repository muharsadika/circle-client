/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Card,
    CardHeader,
    Heading,
    CardBody,
    Stack,
    StackDivider,
    Flex,
    Avatar,
    Text,
    Box,
} from "@chakra-ui/react";
import { useGetUser } from "@/features/hooks/GetUserHook";

export default function FollowerFeature() {
    const { GetUser, isLoading } = useGetUser();

    if (isLoading) return <div>Loading...</div>;

    const { followers } = GetUser;
    return (
        <Box>
            <Card
                border={"solid 1px grey"}
                bg={"transparent"}
                color={"white"}
            >
                <CardHeader>
                    <Heading size="xs" fontWeight={"thin"} color={"yellow.300"}>
                        YOUR FOLLOWERS: {followers?.length}
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                        {followers?.map((follower: any) => (
                            <Box key={follower.id}>
                                <Flex gap="4">
                                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                                        <Avatar
                                            name={follower.full_name}
                                            src={follower.profile_picture}
                                            size="sm"
                                        />
                                        <Box>
                                            <Heading size="sm">{follower.full_name}</Heading>
                                        </Box>
                                    </Flex>
                                </Flex>
                                <Heading size="xs"></Heading>
                                <Text pt="2" fontSize="sm">
                                    {/* {follower.profile_description
                                        ? follower.profile_description
                                        : "Tidak ada deskripsi profil"} */}
                                    {follower.bio}
                                </Text>
                            </Box>
                        ))}
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    );
}
