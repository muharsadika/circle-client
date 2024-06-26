import NavbarComponent from '@/components/Navbar/Navbar';
import SuggestedComponent from '@/components/Suggested/Suggested';
import FooterComponent from '@/components/Footer/Footer';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { ReactNode } from 'react';
import ProfileFeature from '../components/Profile/Profile';

export default function Main({ children }: { children: ReactNode }) {
  return (
      <Box display={'flex'} h={'100vh'} my={1}>
        <Box w={'25%'}>
          <NavbarComponent />
        </Box>

        <Box w={'50%'}>{children}</Box>

        <Box w={'25%'}>
          <Grid gap={5} w={'90%'} mx={'auto'}>
            <GridItem>
              <ProfileFeature />
            </GridItem>
            <GridItem>
              <SuggestedComponent />
            </GridItem>
            <GridItem>
              <FooterComponent />
            </GridItem>
          </Grid>
        </Box>
      </Box>
  );
}