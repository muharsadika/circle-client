import { FormControl, Input, Text, Button, Box, useBreakpointValue } from '@chakra-ui/react';
import { FormLoginHook } from '../hooks/FormLoginHook';
import { useNavigate } from 'react-router-dom';

export default function FormLoginFeature() {
  const { handleChange, onSubmit } = FormLoginHook();
  const navigate = useNavigate();
  const formWidth = useBreakpointValue({ base: '100%', md: '50%', lg: '30%' });
  const titleForm = useBreakpointValue({ base: 'none', md: 'flex', lg: 'flex' });

  return (
    <FormControl
      isRequired
      as="form"
      display={'flex'}
      flexDirection={'column'}
      gap={5}
      width={formWidth}
      bg={'blackAlpha.50'}
      color={'white'}
      border={'1px solid white'}
      borderRadius={20}
      padding={5}
      onSubmit={onSubmit}
    >
      <Text
        display={titleForm}
        color={'blue.500'}
        fontSize={'9xl'}
        fontWeight={'bold'}
        marginTop={-50}
        _hover={{ color: 'blue.300', cursor: 'pointer' }}
        onClick={() => navigate('/home')}
      >
        Circle
      </Text>

      <Text display={'flex'} gap={1}>
        <Text fontSize={'2xl'} fontWeight={'medium'}>
          Login
        </Text>
        <Text
          fontSize={'2xl'}
          fontWeight={'bold'}
          color="blue.500"
          _hover={{ color: 'blue.300', cursor: 'pointer' }}
          onClick={() => navigate('/home')}
        >
          Circle
        </Text>
      </Text>

      <Box display={'flex'} flexDirection={'column'} gap={3}>
        <Input placeholder="Username" name="username" onChange={handleChange} />
        <Input type="password" placeholder="Password" name="password" onChange={handleChange} />
      </Box>

      <Box display="flex" justifyContent={'flex-end'}>
        <Text color="blue.700" cursor={'pointer'} _hover={{ color: 'blue.500' }}>
          Forgot password?
        </Text>
      </Box>

      <Button colorScheme="blue" type="submit" w="100%" mt={5}>
        Login
      </Button>
    </FormControl>
  );
}
