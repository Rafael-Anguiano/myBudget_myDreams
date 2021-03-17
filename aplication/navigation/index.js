import React from 'react';
import { AuthProvider } from '../Auth/AuthProvider';
import Routes from './Routes';

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default Providers;