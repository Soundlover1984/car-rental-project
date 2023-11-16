import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import 'modern-normalize/modern-normalize.css';
import './styles/variables.css';
import './styles/fonts.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <BrowserRouter basename="/car-rental-project">
      <App />
    </BrowserRouter>
     </Provider>
);