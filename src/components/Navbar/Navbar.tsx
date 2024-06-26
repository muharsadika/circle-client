import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { AUTH_LOGOUT } from '@/store/RootReducer';
import { useNavigate } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { GoSearch } from 'react-icons/go';
import { GoMail } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/type/RootState';

export default function NavbarComponent() {
  const user = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(AUTH_LOGOUT());
    navigate('/login');
  }

  const menuButtonStyle = {
    justifyContent: 'start',
    w: 'full',
    gap: 5,
    color: 'white',
    bgColor: 'transparent',
    _hover: { bgColor: 'rgb(125, 125, 125, 0.1)', color: 'red.500' },
    borderRadius: 'full',
    fontSize: 'lg',
    fontWeight: 'normal',
  };

  return (
    <Box gap={10} display={'flex'} flexDirection={'column'}>
      <Heading
        size={'3xl'}
        color="blue.500"
        alignSelf={'center'}
        onClick={() => navigate('/home')}
        _hover={{ color: 'white', cursor: 'pointer' }}
      >
        Circle
      </Heading>

      <VStack mx={'auto'} gap={3}>
        <Button {...menuButtonStyle} onClick={() => navigate('/home')}>
          <GoHome size={25} />
          <Text>Home</Text>
        </Button>

        <Button {...menuButtonStyle} onClick={() => navigate('/explore')}>
          <GoSearch size={25} />
          Explore
        </Button>

        <Button {...menuButtonStyle} onClick={() => navigate('/message')}>
          <GoMail size={25} />
          Message
        </Button>

        <Button {...menuButtonStyle} onClick={() => navigate('/profile')}>
          <IoPersonOutline size={25} />
          Profile
        </Button>

        <Button {...menuButtonStyle} onClick={() => navigate('/setting')}>
          <IoSettingsOutline size={25} />
          Setting
        </Button>

        <Button
          w={'150%'}
          size={'lg'}
          borderRadius={'full'}
          bgColor={'blue.500'}
          color={'white'}
          _hover={{ bgColor: 'white', color: 'blue.500' }}
          alignSelf={'start'}
          onClick={() => navigate('/post')}
        >
          Post
        </Button>
      </VStack>

      <Box
        position={'fixed'}
        bottom={2}
        alignSelf={'center'}
        fontSize={'xs'}
        color={'whiteAlpha.500'}
        display={'flex'}
        gap={1}
        _hover={{ color: 'red.500', cursor: 'pointer' }}
        onClick={handleLogout}
      >
        <Text>Log out</Text>
        <Text color={'blue.500'} _hover={{ color: 'red.500' }}>
          @{user.username}
        </Text>
      </Box>
    </Box>
  );
}
