import { theme, ThemeProvider, CSSReset } from '@chakra-ui/react';

import AppProvider from './hooks';

import { LoginScreen } from './pages/LoginScreen';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

      <AppProvider>
        <LoginScreen />
      </AppProvider>
    </ThemeProvider>
  );
}
