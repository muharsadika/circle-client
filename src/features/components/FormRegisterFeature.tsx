import { FormControl, Input, Text, Button, Box } from '@chakra-ui/react';
import { FormRegisterHook } from '../hooks/FormRegisterHook';
import { useNavigate } from 'react-router-dom';

export default function FormRegisterFeature() {
  const { handleChange, handleRegister } = FormRegisterHook();
  const navigate = useNavigate();

  return (
    <FormControl
      isRequired
      width={'25%'}
      display={'flex'}
      flexDirection={'column'}
      gap={5}
      bg={'blackAlpha.50'}
      color={'white'}
      borderRadius={20}
      padding={5}
      border={'1px solid white'}
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
          Create Account
        </Text>
        <Text
          fontSize={'2xl'}
          fontWeight={'bold'}
          color={'blue.500'}
          _hover={{ color: 'blue.300', cursor: 'pointer' }}
          onClick={() => navigate('/home')}
        >
          Circle
        </Text>
      </Text>

      <Box display={'flex'} flexDirection={'column'} gap={3}>
        <Input placeholder="Full Name" name="full_name" onChange={handleChange} />
        <Input placeholder="Email" name="email" onChange={handleChange} />
        <Input placeholder="Username" name="username" onChange={handleChange} />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleRegister();
            }
          }}
        />
      </Box>

      <Button colorScheme="blue" onClick={handleRegister} marginTop={5}>
        Create
      </Button>
    </FormControl>
  );
}
