/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface Customer {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  customer: Customer;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  customer: Customer;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@E-Commerce:token');
    const customer = localStorage.getItem('@E-Commerce:customer');

    if (token && customer) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, customer: JSON.parse(customer) };
    }

    return {} as AuthState;
  });

  const signOut = useCallback(() => {
    localStorage.removeItem('@E-Commerce:token');
    localStorage.removeItem('@E-Commerce:customer');

    setData({} as AuthState);
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { customer, token } = response.data;

    localStorage.setItem('@E-Commerce:token', token);
    localStorage.setItem('@E-Commerce:customer', JSON.stringify(customer));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, customer });
  }, []);

  return (
    <AuthContext.Provider value={{ customer: data.customer, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
