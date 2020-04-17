import React from 'react';

import { ApiProvider } from 'library/network/API';
import { AuthUserProvider } from 'library/network/Auth';
import Router from './components/Router';

export default function App() {
  return (
    <ApiProvider>
      <AuthUserProvider>
        <Router />
      </AuthUserProvider>
    </ApiProvider>
  );
}
