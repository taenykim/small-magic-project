import React from 'react'
import { GlobalStyle } from '../reset.css.js'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { applyMiddleware, compose, createStore } from 'redux'
import reducer from '../reducers'
import Background from '../components/Background.js'

const _app = ({ Component, store }) => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Background>
          <Component />
        </Background>
      </Provider>
    </>
  )
}

const configureStore = (initialState, options) => {
  const middlewares = []
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        )
  const store = createStore(reducer, initialState, enhancer)
  return store
}

export default withRedux(configureStore)(_app)
