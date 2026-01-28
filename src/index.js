import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, AuthProvider } from '@never-alone-sidekick/ui';
import '@never-alone-sidekick/ui/dist/styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/feature-tracker">
      <ThemeProvider defaultTheme="dark">
        <AuthProvider 
          googleClientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          allowedDomains={['sobersidekick.com', 'empathyhealthtech.com']}
        >
          <App />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
