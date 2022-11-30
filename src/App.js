import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import * as Page from './Page';
import * as Component from './components';
import * as Layout from './Layouts'
// REDUX
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './Bootstraps/rootReducer';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootSaga from './Bootstraps/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

function App() {

  const sagaMiddleWare = createSagaMiddleWare();
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
  sagaMiddleWare.run(rootSaga)


  const pages = [
    {
      path: '/',
      element: <Page.Home />
    },
    {
      path: '/portofolio',
      element: <Page.Portofolio />
    },
    {
      path: '/achievement',
      element: <Page.Achievement />
    },
    {
      path: '/project/:name',
      element: <Page.Project />
    },
  ]

  return (
    <Provider store={store}>
      <Router>
        <Component.ScrollToTop>
          <Layout.Navbar /> 
          <Routes>
            {
              pages?.map((el, i)=>{
                return(
                  <Route key={i} path={el.path} element={el.element} />
                )})
            }
          </Routes>
        </Component.ScrollToTop>
      </Router>
    </Provider>
  );   
}

export default App;

