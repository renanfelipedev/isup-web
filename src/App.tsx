import { theme, ThemeProvider, CSSReset } from '@chakra-ui/react';

import { LoginScreen } from './pages/LoginScreen';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <LoginScreen />
    </ThemeProvider>
  );
}
