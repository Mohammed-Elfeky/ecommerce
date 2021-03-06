import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store,persistor} from './Redux/store'
import { Provider } from 'react-redux';
//persisting stuff
import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        {/* persisting stuff */}
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
   </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
);
