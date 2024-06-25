import { FormControl, Input, Text, Button, Box, useBreakpointValue } from '@chakra-ui/react';
import { FormLoginHook } from '../hooks/FormLoginHook';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function FormLoginFeature() {
  const { handleChange, onSubmit } = FormLoginHook();
  const navigate = useNavigate();
  const formWidth = useBreakpointValue({ base: '100%', md: '50%', lg: '30%' });
  const titleForm = useBreakpointValue({ base: 'none', md: 'flex', lg: 'flex' });
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

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
        <Box>
          <Input placeholder="Username" name="username" onChange={handleChange} />
        </Box>

        <Box position="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <Button
            onClick={togglePasswordVisibility}
            position={'absolute'}
            right={'1px'}
            top={'50%'}
            transform={'translateY(-50%)'}
            variant={'unstyled'}
            color={'gray.500'}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </Box>
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
