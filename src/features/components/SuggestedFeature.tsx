import { API } from '@/libs/API';
import { Avatar, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useGetUser } from '../hooks/GetUserHook';

interface IUser {
  id: number;
  username: string;
  full_name: string;
  profile_picture: string;
}

export default function SuggestedFeature({ id, full_name, username, profile_picture }: IUser) {
  const { GetUser, isLoading } = useGetUser();
  const [targetUserID, setTargetUserID] = useState({ id });
  const isFollowing = GetUser?.following?.some((follow: IUser) => follow.id === id);
  const [isHovered, setIsHovered] = useState(false);

  const queryClient = useQueryClient();
  const { mutate: handleFollow } = useMutation({
    mutationFn: () => {
      return API.post(`follow`, targetUserID);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['User'] });
    },
    onError: (error) => {
      console.error('Error following user:', error);
    },
  });

  function handleClick() {
    setTargetUserID({ id });
    handleFollow();
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <HStack justify={'space-between'}>
      <HStack spacing={2}>
        <Avatar size={'md'} src={profile_picture} />

        <VStack spacing={-4} alignItems={'start'}>
          <Text fontSize={'md'} color="white" fontWeight="medium">
            {full_name}
          </Text>

          <Text color={'whiteAlpha.600'} fontSize={'sm'} fontWeight={'thin'}>
            @{username}
          </Text>
        </VStack>
      </HStack>

      <Button
        onClick={handleClick}
        rounded={'full'}
        variant={'outline'}
        color={isFollowing ? 'white' : 'black'}
        bgColor={isFollowing ? 'transparent' : 'white'}
        _hover={{ bg: isFollowing ? 'red.500' : 'blue.500', color: 'white' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && isFollowing ? 'Unfollow' : isFollowing ? 'Following' : 'Follow'}
      </Button>
    </HStack>
  );
}
