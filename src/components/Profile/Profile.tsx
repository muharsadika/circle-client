import { RootState } from '@/store/type/RootState';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import { useGetUser } from '../../features/hooks/GetUserHook';
import { useNavigate } from 'react-router-dom';

export default function ProfileFeature() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth);
  const { GetUser, isLoading } = useGetUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card background="whiteAlpha.200" rounded="2xl">
      <CardHeader>
        <Heading color="white" size={'xs'} fontWeight={'medium'}>
          My Profile
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack>
          <Box
            bgImage={'https://th.bing.com/th/id/OIP.ZGNLwbqm0mRGg58CZmxdMAHaEo?pid=ImgDet&rs=1'}
            borderRadius={'xl'}
            w={'100%'}
            h={'100px'}
          >
            <Box h={'full'} display={'flex'} justifyContent={'space-between'} mx={3}>
              <Avatar
                size="lg"
                border={'1px solid white'}
                name={user?.full_name}
                src={user?.profile_picture}
                alignSelf={'center'}
                _hover={{ cursor: 'pointer' }}
              />

              <Button
                alignSelf={'end'}
                bottom={2}
                color="white"
                size="xs"
                rounded="full"
                variant="outline"
                _hover={{ bg: 'blue.500', color: 'white' }}
                onClick={() => navigate('/profile/')}
              >
                Edit Profile
              </Button>
            </Box>
          </Box>

          <Box>
            <Text
              w={'fit-content'}
              fontSize="xl"
              fontWeight="semibold"
              color="white"
              display={'flex'}
              alignItems={'center'}
              gap={1}
              _hover={{ cursor: 'pointer' }}
              onClick={() => navigate('/profile')}
            >
              {user?.username}
              <span style={{ color: '#1D9BF0' }}>
                <VscVerifiedFilled />
              </span>
            </Text>

            <Text w={'fit-content'} fontSize="sm" fontWeight="thin" color="whiteAlpha.500">
              @{user?.username}
            </Text>

            <Text w={'fit-content'} fontSize="md" color="white" my={5}>
              {user?.bio}
            </Text>

            <HStack w={'fit-content'} gap={3}>
              <HStack gap={1}>
                <Text fontSize="md" color="white">
                  {GetUser.following.length}
                </Text>
                <Text fontSize="md" color="whiteAlpha.500" fontWeight="thin">
                  Following
                </Text>
              </HStack>
              <HStack gap={1}>
                <Text fontSize="md" color="white">
                  {GetUser.followers.length}
                </Text>
                <Text fontSize="md" color="whiteAlpha.500" fontWeight="thin">
                  Followers
                </Text>
              </HStack>
            </HStack>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
