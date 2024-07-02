import { Box, Card, CardBody, CardHeader, Heading, Image, Text } from '@chakra-ui/react';
import { BiLogoFacebook, BiLogoGithub, BiLogoInstagramAlt, BiLogoYoutube } from 'react-icons/bi';

export default function FooterComponent() {
  return (
    <Card bg={'#333333'} rounded={'2xl'}>
      <CardHeader>
        <Heading color={'white'} size={'xs'} fontWeight={'medium'} display={'flex'} gap={1}>
          <Text>Developed by</Text>
          <Text
            color="blue.500"
            fontWeight={'bold'}
            onClick={() => window.open('https://github.com/MuharSadika')}
            _hover={{ cursor: 'pointer' }}
          >
            Muhar Sadika
          </Text>
        </Heading>
      </CardHeader>

      <CardBody>
        <Box display={'flex'} flexDirection={'column'} gap={2}>
          <Box display={'flex'} gap={1} color={'white'}>
            <Text
              fontSize={20}
              onClick={() => window.open('https://github.com/MuharSadika')}
              _hover={{ cursor: 'pointer' }}
            >
              <BiLogoGithub />
            </Text>

            <Text
              fontSize={20}
              onClick={() => window.open('https://www.facebook.com/muharsadika')}
              _hover={{ cursor: 'pointer' }}
            >
              <BiLogoFacebook />
            </Text>

            <Text
              fontSize={20}
              onClick={() => window.open('https://www.instagram.com/muharsadika')}
              _hover={{ cursor: 'pointer' }}
            >
              <BiLogoInstagramAlt />
            </Text>

            <Text
              fontSize={20}
              onClick={() =>
                window.open('https://www.youtube.com/channel/UC9bqQjXtQOj5h2T5vZtBQWg')
              }
              _hover={{ cursor: 'pointer' }}
            >
              <BiLogoYoutube />
            </Text>
          </Box>

          <Box display={'flex'} gap={2} alignItems={'center'} color={'white'}>
            <Text fontSize="xs">Powered by</Text>
            <Image display="inline" h="16px" src="./src/assets/logo.png" />
            <Text fontSize="xs">Dumbways Indonesia</Text>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
}
