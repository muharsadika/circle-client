/* eslint-disable @typescript-eslint/no-explicit-any */
import { API } from "@/libs/API";
import { Avatar, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useGetUser } from "../hooks/GetUserHook";

export default function SuggestedFeature({ user_id, full_name, username, profile_picture }: any) {
    const [followId, setFollowId] = useState({
        user_id: user_id,
    });

    const { GetUser, isLoading } = useGetUser();

    const queryClient = useQueryClient();

    const { mutate: handleFollow } = useMutation({
        mutationFn: () => {
            return API.post(`follow`, followId);
        },
        onSuccess: () => {
            // queryClient.invalidateQueries({ queryKey: ["Users"] });
            queryClient.invalidateQueries({ queryKey: ["User"] });
            // queryClient.invalidateQueries({ queryKey: ["Follow"] });
        },
        onError: (error) => {
            console.log(error);
        },
    });


    function handleClick() {
        setFollowId({ user_id: user_id });
        handleFollow();
    }

    if (isLoading) return <div>Loading...</div>;

    const { following } = GetUser;  //following diambil dari entiti user relasi following (untuk ambil data id following nya)


    const isFollowing = following.some((follow: any) => follow.id === user_id);

    return (
        <HStack
            justify='space-between'
        // border={"1px solid red"}
        >
            <HStack spacing={3}>
                <Avatar size='sm' src={profile_picture} />
                <Stack spacing={-4}>
                    <Text fontSize='xs' color='white'>{full_name}</Text>
                    <Text color='whiteAlpha.600' fontSize='xs'>@{username}</Text>
                </Stack>
            </HStack>
            <Button
                _hover={{ bg: 'whatsapp' }}
                onClick={handleClick}
                variant='outline'
                rounded='full'
                color={isFollowing ? "white" : 'whiteAlpha.700'}
                size='sm'
            >
                {isFollowing ? "Following" : 'Follow'}
            </Button>
        </HStack>



        // /* eslint-disable @typescript-eslint/no-explicit-any */
        // import { useGetFollow } from "@/features/hooks/GetFollowHook";
        // import { API } from "@/libs/API";
        // import { Avatar, Button, HStack, Stack, Text } from "@chakra-ui/react";
        // import { useMutation, useQueryClient } from "@tanstack/react-query";
        // import { useState } from "react";

        // export default function SuggestedFeature({ user_id, full_name, username, profile_picture }: any) {
        //     const [followId, setFollowId] = useState({
        //         user_id: user_id,
        //     });

        //     const { GetFollow, isLoading } = useGetFollow();

        //     const queryClient = useQueryClient();

        //     const { mutate: handleFollow } = useMutation({
        //         mutationFn: () => {
        //             return API.post(`follow`, followId);
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

        //     function handleClick() {
        //         setFollowId({ user_id: user_id });
        //         handleFollow();
        //     }

        //     if (isLoading) return <div>Loading...</div>;

        //     const { following } = GetFollow;


        //     const isFollowing = following.some((follow: any) => follow.id === user_id);

        //     // function handleFollow() {
        //     // 	setFollow(!follow);
        //     // }

        //     return (
        //         <HStack justify='space-between' border={"1px solid red"}>
        //             <HStack spacing={3}>
        //                 <Avatar size='sm' src={profile_picture} />
        //                 <Stack spacing={-4}>
        //                     <Text fontSize='xs' color='white'>{full_name}</Text>
        //                     <Text color='whiteAlpha.600' fontSize='xs'>@{username}</Text>
        //                 </Stack>
        //             </HStack>
        //             <Button
        //                 _hover={{ bg: 'whatsapp' }}
        //                 onClick={handleClick}
        //                 variant='outline'
        //                 rounded='full'
        //                 color={isFollowing ? "white" : 'whiteAlpha.700'}
        //                 size='sm'
        //             >
        //                 {isFollowing ? "Following" : 'Follow'}
        //             </Button>
        //         </HStack>

        // <HStack justify="space-between">
        // 	<HStack spacing={3}>
        // 		<Avatar size="sm" />
        // 		<Stack spacing={-4}>
        // 			<Text fontSize="xs" color="white">
        // 				{fullname}
        // 			</Text>
        // 			<Text color="whiteAlpha.600" fontSize="xs">
        // 				@{username}
        // 			</Text>
        // 		</Stack>
        // 	</HStack>
        // 	<Button
        // 		_hover={{ bg: "whatsapp" }}
        // 		onClick={handleClick}
        // 		variant="outline"
        // 		rounded="full"
        // 		color={isFollowing ? "white" : "whiteAlpha.700"}
        // 		size="sm">
        // 		{isFollowing ? "Following" : "Follow"}
        // 	</Button>
        // </HStack>
    );
}
