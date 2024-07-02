import { RootState } from '@/store/type/RootState';
import { Avatar, Box, Button, HStack, Text } from '@chakra-ui/react';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import { useGetUser } from '../hooks/GetUserHook';

export default function ProfileFeature() {
  const user = useSelector((state: RootState) => state.auth);
  const { GetUser, isLoading } = useGetUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box bg="whiteAlpha.100" h={420} display={'flex'}>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} w={'100%'}>
        <Box
          bgImage={'https://th.bing.com/th/id/OIP.ZGNLwbqm0mRGg58CZmxdMAHaEo?pid=ImgDet&rs=1'}
          h={'200px'}
        >
          <Box h={'full'} display={'flex'} justifyContent={'space-between'} mx={3}>
            <Avatar
              size="2xl"
              border={'5px solid rgb(45,45,45)'}
              name={user?.full_name}
              src={user?.profile_picture}
              alignSelf={'center'}
              _hover={{ cursor: 'pointer' }}
              bottom={-100}
            />

            <Button
              alignSelf={'end'}
              bottom={-10}
              color={'white'}
              size={'sm'}
              rounded={'full'}
              variant={'outline'}
              _hover={{ bg: 'white', color: 'blue.500' }}
            >
              Edit Profile
            </Button>
          </Box>
        </Box>

        <Box p={2}>
          <Text
            w={'fit-content'}
            fontSize="xl"
            fontWeight="semibold"
            color={'white'}
            display={'flex'}
            alignItems={'center'}
            gap={1}
            _hover={{ cursor: 'pointer' }}
          >
            {user?.username}
            <span style={{ color: '#1D9BF0' }}>
              <VscVerifiedFilled />
            </span>
          </Text>

          <Text w={'fit-content'} fontSize={'md'} fontWeight={'thin'} color={'gray'}>
            @{user?.username}
          </Text>

          <Text w={'fit-content'} fontSize={'md'} color={'white'} my={5}>
            {user?.bio}
          </Text>

          <HStack w={'fit-content'} gap={3}>
            <HStack gap={1}>
              <Text fontSize={'md'} color={'white'}>
                {GetUser.following.length}
              </Text>
              <Text fontSize={'md'} color={'gray'} fontWeight={'thin'}>
                Following
              </Text>
            </HStack>
            <HStack gap={1}>
              <Text fontSize={'md'} color={'white'}>
                {GetUser.followers.length}
              </Text>
              <Text fontSize={'md'} color={'gray'} fontWeight={'thin'}>
                Followers
              </Text>
            </HStack>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
