import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from "react-redux";
import { legacy_createStore  as createReduxStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";

import { ContextProvider } from "./context/ThemeContext.js";
import App from "./App.jsx";

import mySaga from "./store/sagas/index.js";
import reducers from "./store/reducers/index.js";

import "./index.css";
const root = ReactDOMClient.createRoot(document.getElementById("root"));
const sagaMiddleware = createSagaMiddleware();
const store = createReduxStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
