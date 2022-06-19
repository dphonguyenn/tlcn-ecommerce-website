import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { ContextProvider } from './context/ThemeContext.js';
import App from './App';
import mySaga from './redux/sagas';
import reducers from './redux/reducers';
import './index.css';
// import Home from './pages/Home.js';
// import SpecifyTypeProduct from './pages/SpecifyTypeProduct.js';
// import DetailedProduct from './pages/DetailedProduct.js';
// import Header from './components/Header/index.js';
// import Footer from './components/Footer/index.js';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
