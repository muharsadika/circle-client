/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Box,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import FollowingFeature from "@/features/components/FollowingFeature";
import FollowerFeature from "@/features/components/FollowerFeature";



export default function Follow() {

    return (

        <>
            <Box py={10}>
                <Tabs isFitted variant="solid-rounded" colorScheme='green'>
                    <TabList>
                        <Tab>Following</Tab>
                        <Tab>Follower</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <FollowingFeature /> //error karena di feature nya ngirim props
                        </TabPanel>
                        <TabPanel>
                            <FollowerFeature />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </>
        // <>
        //     <Grid border={"5px solid red"} h={"100vh"} >
        //         <GridItem overflowY="auto"                >
        //             <Text color="white" fontSize="lg" border={"5px solid blue"}>
        //                 Follows
        //             </Text>
        //         </GridItem>

        //         <GridItem color={"white"} border={"5px solid blue"}>
        //             {List.map((user: any) => (
        //                 <Followingfeature
        //                     key={user.id}
        //                     user_id={user.id}
        //                     username={user.username}
        //                     fullname={user.fullname}
        //                 />
        //             ))}
        //         </GridItem>
        //     </Grid>
        // </>
    );
}
