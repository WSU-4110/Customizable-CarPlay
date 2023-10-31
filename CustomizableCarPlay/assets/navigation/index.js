import React from 'react';
import Routes from './Routes';
import{AuthProviders} from './AuthProvider';

const Providers = () => {
  return (
    <AuthProvider>
    <Routes/>
    </AuthProvider>
  );
}

export default Providers;