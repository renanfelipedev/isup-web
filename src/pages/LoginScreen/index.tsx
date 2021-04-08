import { Box, Heading } from '@chakra-ui/react';

import { LoginForm } from './LoginForm';

export const LoginScreen: React.FC = () => {
  return (
    <Box minH="100vh" py="12" px={{ sm: '6', lg: '8' }}>
      <Box maxW={{ sm: 'md' }} mx={{ sm: 'auto' }} w={{ sm: 'full' }}>
        <Heading mt="6" textAlign="center" size="xl" fontWeight="extrabold">
          Sign in to your account
        </Heading>
      </Box>
      <Box maxW={{ sm: 'md' }} mx={{ sm: 'auto' }} mt="8" w={{ sm: 'full' }}>
        <Box py="8" px={{ base: '4', md: '10' }} rounded={{ sm: 'lg' }}>
          <LoginForm />
        </Box>
      </Box>
    </Box>
  );
};
