import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './routes';
import { GlobalStyles } from './styles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <GlobalStyles />
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;