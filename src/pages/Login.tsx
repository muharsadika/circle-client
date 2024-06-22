import { useNavigate } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import FormLoginFeature from '@/features/components/FormLoginFeature';

export default function Login() {
  const navigate = useNavigate();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      color={'white'}
      gap={2}
      width={'full'}
      height={'100vh'}
    >
      <FormLoginFeature />

      <Box display={'flex'} gap={2}>
        <Text fontSize={'sm'}> Don't have an account yet? </Text>
        <Text
          fontSize={'sm'}
          color={'blue.500'}
          fontWeight={'medium'}
          cursor={'pointer'}
          _hover={{ color: 'blue.300', cursor: 'pointer' }}
          onClick={() => navigate('/register')}
        >
          Create account
        </Text>
      </Box>
    </Box>
  );
}
