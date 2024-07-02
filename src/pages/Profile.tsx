import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react';
import ProfileFeature from '@/features/components/ProfileFeature';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/type/RootState';
import { BiArrowBack } from 'react-icons/bi';
import { useGetUser } from '@/features/hooks/GetUserHook';

export default function Profile() {
  const user = useSelector((state: RootState) => state.auth);
  const { GetUser, isLoading } = useGetUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Stack w={'90%'} h={'100vh'} mx={'auto'} borderX={'1px solid rgb(255, 255, 255, 0.5)'}>
        <HStack>
          <Box>
            <Button display={'flex'} variant={'unstyled'} onClick={() => window.history.back()}>
              <BiArrowBack color="white" />
            </Button>
          </Box>

          <Box>
            <Text color="white" fontSize="lg" fontWeight="medium">
              {user?.full_name}
            </Text>
            <Text color="gray" fontSize="xs" fontWeight="thin">
              {GetUser.threads.length + GetUser.replies.length} Posts
            </Text>
          </Box>
        </HStack>

        <Stack>
          <ProfileFeature />
        </Stack>
      </Stack>
    </>
  );
}
