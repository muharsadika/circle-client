import { Avatar, Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import { ThreadType } from '@/Types/ThreadType';
import { Link } from 'react-router-dom';
import { RootState } from '@/store/type/RootState';
import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/libs/API';
import { FaRegComment } from 'react-icons/fa';

export default function ThreadFeature(props: ThreadType) {
  const { content, image, user, replies, likes, id } = props;
  const [like, setLike] = useState({ thread: id });

  const userAuth = useSelector((state: RootState) => state?.auth);
  const queryClient = useQueryClient();
  const { mutate: handleLike } = useMutation({
    mutationFn: () => {
      return API.post(`like`, like);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['thread'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  function handleClick() {
    setLike({ thread: id });
    handleLike();
  }

  return (
    <Box display={'flex'} px={5} my={0} borderBottom={'1px solid gray'} py={2} gap={2}>
      <Box alignSelf={'start'}>
        <Avatar size="md" src={user?.profile_picture} name={user?.full_name} />
      </Box>

      <Box w={'full'}>
        <VStack>
          <HStack w={'full'}>
            <Text fontSize={'md'} fontWeight={'medium'} color={'white'} cursor={'pointer'}>
              {user?.full_name}
            </Text>

            <Text fontWeight={'thin'} color={'whiteAlpha.600'} fontSize={'sm'}>
              @{user?.username}
              {/* {time} */}
            </Text>
          </HStack>

          <VStack w={'full'} alignItems={'start'} gap={5}>
            <Text fontSize="sm" fontWeight={'normal'} color="whiteAlpha.800">
              {content}
            </Text>

            {image && (
              <Image src={image} alignSelf={'flex-start'} borderRadius={10} maxWidth={'300px'} />
            )}
          </VStack>

          <HStack w={'full'} gap={5} my={2}>
            <HStack onClick={handleClick} cursor="pointer" color="whiteAlpha.600">
              <AiFillHeart
                size={20}
                color={likes?.map((like) => like.user?.id).includes(userAuth.id) ? 'red' : 'gray'}
              />

              <Text fontSize="sm">{likes?.length}</Text>
            </HStack>

            <HStack color="whiteAlpha.600" cursor={'pointer'}>
              <Link to={`/thread/${id}`}>
                <HStack>
                  <FaRegComment size={20} />

                  <Text fontSize="sm">{replies?.length}</Text>
                </HStack>
              </Link>
            </HStack>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
