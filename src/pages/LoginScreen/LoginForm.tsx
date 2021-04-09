import { useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormLabel,
  Alert,
  Input,
  Stack,
} from '@chakra-ui/react';

import { useAuth } from '../../hooks/auth';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { signIn } = useAuth();

  async function handleSubmit() {
    setIsLoading(true);
    try {
      await signIn({ email, password });
      setHasError(false);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  }

  return (
    <Stack spacing="6">
      {hasError && <Alert status="error">Erro de autenticação</Alert>}
      <FormControl id="email">
        <FormLabel>E-mail</FormLabel>
        <Input
          name="email"
          type="email"
          placeholder="usuario@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />
      </FormControl>

      <FormControl id="password">
        <FormLabel>Senha</FormLabel>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FormControl>

      <Button
        type="submit"
        colorScheme="blue"
        size="lg"
        fontSize="md"
        rightIcon={<ArrowForwardIcon />}
        onClick={handleSubmit}
        isLoading={isLoading}
      >
        Acessar
      </Button>
    </Stack>
  );
};
