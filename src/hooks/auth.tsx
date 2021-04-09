import { createContext, useContext, useState, useCallback } from 'react';

import { api } from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Isup-Web:token');
    const user = localStorage.getItem('@Isup-Web:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/login', { email, password });
    const { token, user } = response.data;

    localStorage.setItem('@Isup-Web:token', token);
    localStorage.setItem('@Isup-Web:user', JSON.stringify(user));

    setData({ user, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Isup-Web:token');
    localStorage.removeItem('@Isup-Web:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used with an AuthProvider');
  }

  return context;
};
