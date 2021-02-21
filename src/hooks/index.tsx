import React from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { RecordProvider } from './record';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <RecordProvider>
      <ToastProvider>{children}</ToastProvider>
    </RecordProvider>
  </AuthProvider>
);

export default AppProvider;
