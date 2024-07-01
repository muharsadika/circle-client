import NavbarComponent from '@/components/Navbar/Navbar';
import SuggestedComponent from '@/components/Suggested/Suggested';
import FooterComponent from '@/components/Footer/Footer';
import { Box, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import ProfileFeature from '../components/Profile/Profile';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <Box display={'flex'} h={'100vh'} my={1}>
      <Box w={'25%'} position="fixed" left={0} top={1} bottom={1}>
        <NavbarComponent />
      </Box>

      <Box w={'50%'} mx={'auto'} overflowY="auto" h="100%">
        {children}
      </Box>

      <Box w={'25%'} position="fixed" right={0} top={1} bottom={1}>
        <Stack gap={5} w={'90%'} h="100%" overflowY="auto">
          <ProfileFeature />
          <SuggestedComponent />
          <FooterComponent />
        </Stack>
      </Box>
    </Box>
  );
}
