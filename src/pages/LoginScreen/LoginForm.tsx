import { useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

import { api } from '../../services/api';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    setIsLoading(true);
    await api
      .post('/login', { email, password })
      .then((response) => setToken(response.data))
      .catch();
    setIsLoading(false);
  }

  return (
    <Stack spacing="6">
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
