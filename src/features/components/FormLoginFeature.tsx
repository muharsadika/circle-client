import { FormControl, Input, Text, Button, Box } from '@chakra-ui/react';
import { FormLoginHook } from '../hooks/FormLoginHook';
import { useNavigate } from 'react-router-dom';

export default function FormLoginFeature() {
  const { handleChange, handleLogin } = FormLoginHook();
  const navigate = useNavigate();

  return (
    <FormControl
      isRequired
      display={'flex'}
      flexDirection={'column'}
      gap={3}
      width={'25%'}
      bg={'blackAlpha.50'}
      color={'white'}
      border={'1px solid white'}
      borderRadius={20}
      padding={5}
    >
      <Text
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

      <Input placeholder="Username" name="username" onChange={handleChange} />

      <Input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        onKeyDown={handleLogin}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleLogin();
          }
        }}
      />

      <Box display="flex" justifyContent={'flex-end'}>
        <Text color="blue.700" cursor={'pointer'} _hover={{ color: 'blue.500' }}>
          Forgot password?
        </Text>
      </Box>

      <Button colorScheme="blue" onClick={handleLogin}>
        Login
      </Button>
    </FormControl>
  );
}
