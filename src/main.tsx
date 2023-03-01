import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import store from './app/store';
// import { UserProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <UserProvider> */}
      {/* Add User Provider <UserProvider> */}
      <App />
      {/* </UserProvider> */}
    </Provider>
  </React.StrictMode>
);
