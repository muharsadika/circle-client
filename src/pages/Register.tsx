import { useNavigate } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import FormRegisterFeature from '@/features/components/FormRegisterFeature';

export default function Register() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        marginTop={'50px'}
        color={'white'}
        gap={2}
        width={'full'}
        height={'100vh'}
      >
        <FormRegisterFeature />

        <Box display={'flex'} gap={2}>
          <Text fontSize={'sm'}>Already have account?</Text>
          <Text
            fontSize={'sm'}
            color="blue.500"
            fontWeight={'medium'}
            cursor={'pointer'}
            _hover={{ color: 'blue.300', cursor: 'pointer' }}
            onClick={() => navigate('/login')}
          >
            Login
          </Text>
        </Box>
      </Box>
    </>
  );
}
