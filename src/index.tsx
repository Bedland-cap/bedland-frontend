import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { reduxStore } from 'store/store';
import ThemeProvider from 'theme/ThemeContext';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
