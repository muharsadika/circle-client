import {
    Grid,
    GridItem,
    Stack,
    Text,
} from "@chakra-ui/react";
import ThreadFeature from "@/features/components/ThreadFeature";
import { ThreadType } from "@/Types/ThreadType";
import { useGetThread } from "@/features/hooks/GetThreadHook";
import FormThreadFeature from "@/features/components/FormThreadFeature";


function Timeline() {
    const { getThread } = useGetThread();


    return (
        <>
            <Grid
                overflowY="auto"
            // padding={3}
            >
                <GridItem py={3}>
                    <Text color="white" fontSize="lg" align={"center"} >
                        Home
                    </Text>
                </GridItem>

                <GridItem>
                    <FormThreadFeature />
                </GridItem>

                <GridItem>
                    <Stack>
                        {getThread &&
                            getThread?.map((e: ThreadType) => (
                                <ThreadFeature
                                    key={e.id}
                                    id={e.id}
                                    content={e.content}
                                    image={e.image}
                                    user={e.user}
                                    replies={e.replies}
                                    likes={e.likes}
                                />
                            ))
                        }
                    </Stack>
                </GridItem>
            </Grid>
        </>
    );
}

export default Timeline;
