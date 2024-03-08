import { Avatar, HStack, Image, Text, VStack } from "@chakra-ui/react";
// import { BsDot } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { useState } from "react";
import { ThreadType } from "@/Types/ThreadType";
import { Link } from "react-router-dom";
import { RootState } from "@/store/type/RootState";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "@/libs/API";


export default function ThreadFeature(props: ThreadType) {
    const { content, image, user, replies, likes, id } = props;
    const [like, setLike] = useState({ thread: id });

    // const userAuth = useSelector((state: RootState) => state?.auth);
    const userAuth = useSelector((state: RootState) => state?.auth);
    const queryClient = useQueryClient();
    const { mutate: handleLike } = useMutation({
        mutationFn: () => {
            return API.post(`like`, like);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["thread"] });
        },
        onError: (error) => {
            console.log(error);
        },
    });
    function handleClick() {
        setLike({ thread: id });
        handleLike();
    }



    return (
        <>
            {/* <Stack> */}
            <HStack
                gap={3}
                borderBottom={"1px solid gray"}
                p={2}
            >
                <Avatar
                    size="md"
                    src={user?.profile_picture}
                    name={user?.full_name}
                    alignSelf={"flex-start"}
                />

                <VStack pr={5}>
                    <HStack w={"full"}>
                        <Text
                            fontSize={"xl"}
                            fontWeight={"bold"}
                            color={"white"}
                            cursor={"pointer"}
                        >
                            {user?.full_name}
                        </Text>

                        <Text
                            fontWeight={"light"}
                            color={"whiteAlpha.600"}
                            fontSize={"sm"}
                        >
                            @{user?.username}
                            {/* {time} */}
                        </Text>
                    </HStack>

                    <VStack gap={5}>
                        <Text
                            fontSize="md"
                            color="whiteAlpha.800"
                            textAlign={"justify"}
                        >
                            {content}
                        </Text>

                        {image && <Image
                            src={image}
                            alignSelf={"flex-start"}
                            borderRadius={10}
                            maxWidth={"300px"}
                        />}
                    </VStack>

                    <HStack
                        gap={5}
                        my={3}
                        w={"full"}
                    >
                        <HStack
                            onClick={handleClick}
                            cursor="pointer"
                            color="whiteAlpha.600"
                        >
                            <AiFillHeart
                                size={20}
                                color=
                                {
                                    likes?.map((like) => like.user?.id).includes(userAuth.id)
                                        ? "red"
                                        : ""
                                }
                            />

                            <Text fontSize="sm">
                                {likes?.length}
                            </Text>
                        </HStack>

                        <HStack color="whiteAlpha.600" w={"full"} cursor={"pointer"}>
                            <Link to={`/thread/${id}`}>
                                <HStack>
                                    <BiCommentDetail size={20} />
                                    <Text fontSize="sm">
                                        {replies?.length}
                                    </Text>
                                </HStack>
                            </Link>
                        </HStack>
                    </HStack>
                </VStack>
            </HStack >
            {/* </Stack> */}
        </>
    );
}