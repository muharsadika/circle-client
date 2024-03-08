/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Card, Stack, Text } from "@chakra-ui/react";
import SuggestedFeature from "@/features/components/SuggestedFeature";
import { useGetUsers } from "@/features/hooks/GetUsersHook";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";

export default function SuggestedComponent() {
    const { GetUsers, isLoading } = useGetUsers();
    const signInUser = useSelector((state: RootState) => state?.auth);

    const List = GetUsers?.filter((user: any) => user.id !== signInUser?.id);

    if (isLoading) return <div>Loading...</div>;
    return (
        <Card
            bg="whiteAlpha.200"
            p={4} height={"!00%"}
            // border={"1px solid blue"}
        >
            <Text color="white">Suggested for you</Text>
            <Box mt={3}  >
                <Stack >
                    {List.map((user: any) => (
                        <SuggestedFeature
                            key={user.id}
                            user_id={user.id}
                            username={user.username}
                            full_name={user.full_name}
                            profile_picture={user.profile_picture}
                        />
                    ))}
                </Stack>
            </Box>
        </Card>
    );
}
