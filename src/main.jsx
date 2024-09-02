import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FormProvider } from './context/FormContext';
// import { Provider } from 'react-redux';
// import store from './store/store';
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  <FormProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FormProvider>
  // </Provider>,
);