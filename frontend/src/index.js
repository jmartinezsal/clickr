import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import configureStore from './store';

import { ModalProvider } from "./context/Modal";
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';
import * as imagesActions from './store/images';
import * as commentsActions from './store/comments';



const store = configureStore();

if(process.env.NODE_ENV !== 'production'){
  restoreCSRF();
  // window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.imagesActions = imagesActions;
  window.commentsActions = commentsActions;
}

function Root(){
  return(
    <Provider store={store}  >
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
