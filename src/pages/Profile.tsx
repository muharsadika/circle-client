/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    GridItem,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useGetUser } from "@/features/hooks/GetUserHook";
import ProfileFeature from "@/features/components/ProfileFeature";
import FormThreadFeature from "@/features/components/FormThreadFeature";
import { UserType } from "@/Types/UserType";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";


export default function Profile() {
    const { GetUser } = useGetUser();
    const user = useSelector((state: RootState) => state.auth)


    return (
        <>
            <GridItem overflowY="auto" px={6} py={4}>

                <Text color="white" fontSize="lg">
                    Profil
                </Text>

                {/* <FormThreadFeature /> */}

                <Stack mt={6}>
                    <ProfileFeature />
                </Stack>

            </GridItem>
        </>
    );
}