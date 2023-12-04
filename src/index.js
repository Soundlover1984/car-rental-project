import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import 'modern-normalize/modern-normalize.css';
import './styles/loader.css';
import './styles/variables.css';
import './styles/fonts.css';
import { PersistGate } from 'redux-persist/integration/react';
import './styles/scroll.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/car-rental-project">
        <App />
    </BrowserRouter>
    </PersistGate>
     </Provider>
);