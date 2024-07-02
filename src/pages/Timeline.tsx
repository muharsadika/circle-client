import { Box, Heading } from '@chakra-ui/react';
import ThreadFeature from '@/features/components/ThreadFeature';
import { ThreadType } from '@/Types/ThreadType';
import { useGetThread } from '@/features/hooks/GetThreadHook';
import FormThreadFeature from '@/features/components/FormThreadFeature';

function Timeline() {
  const { getThread } = useGetThread();
  console.log('getThread', getThread);

  return (
    <>
      <Box w={'90%'} mx={'auto'} borderX={'1px solid rgb(255, 255, 255, 0.5)'}>
        <Box w={'100%'} h={10} display={'flex'}>
          <Box
            w={'50%'}
            h={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            _hover={{
              cursor: 'pointer',
              bgColor: 'rgb(125, 125, 125, 0.1)',
            }}
            bgColor={
              window.location.href.includes('home') ? 'rgb(125, 125, 125, 0.1)' : 'transparent'
            }
          >
            <Heading color={'white'} fontSize={'sm'} textAlign={'center'} fontWeight={'medium'}>
              For you
            </Heading>
          </Box>
          <Box
            w={'50%'}
            h={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            _hover={{
              cursor: 'pointer',
              bgColor: 'rgb(125, 125, 125, 0.1)',
            }}
            bgColor={
              window.location.href.includes('following') ? 'rgb(125, 125, 125, 0.1)' : 'transparent'
            }
          >
            <Heading color={'white'} fontSize={'sm'} textAlign={'center'} fontWeight={'medium'}>
              Following
            </Heading>
          </Box>
        </Box>

        <Box borderY={'1px solid rgb(255, 255, 255, 0.5)'}>
          <FormThreadFeature />
        </Box>

        <Box>
          {getThread &&
            getThread?.map((e: ThreadType) => (
              <ThreadFeature
                key={e.id}
                id={e.id}
                content={e.content}
                image={e.image}
                user={e.user}
                replies={e.replies}
                likes={e.likes}
              />
            ))}
        </Box>
      </Box>
    </>
  );
}

export default Timeline;
