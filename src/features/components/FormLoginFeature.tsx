import { FormControl, Input, Text, Button, Box } from '@chakra-ui/react';
import { FormLoginHook } from '../hooks/FormLoginHook';

export default function FormLoginFeature() {
  const { handleChange, handleLogin } = FormLoginHook();

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
      <Text color={'blue.500'} fontSize={'9xl'} fontWeight={'bold'} marginTop={-50}>
        Circle
      </Text>

      <Text fontSize={'2xl'} fontWeight={'bold'} display={'flex'} gap={1}>
        <Text>Login</Text>
        <Text color="blue.500">Circle</Text>
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
