import React from "react";
import { GlobalStyle } from "../reset.css";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { createStore } from "redux";
import reducer from "../reducers";
import Background from "../components/Background";
import { composeWithDevTools } from "redux-devtools-extension";

interface _appProps {
  Component: any;
  store: any;
}

const _app: React.FC<_appProps> = ({ Component, store }) => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Background>
          <Component />
        </Background>
      </Provider>
    </>
  );
};

const configureStore = (initialState: any, options: any) => {
  const store = createStore(reducer, initialState, composeWithDevTools());
  return store;
};

export default withRedux(configureStore)(_app);
