import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import * as Page from './Page';
import * as Component from './components';
import { createStore } from "redux";
import reducer from "./Bootstraps/reducer";
import { Provider } from "react-redux";

function App() {

  const store = createStore(reducer)


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
          <Routes>
            {
              pages?.map((el, i)=>{
                return(
                  <Route key={i} exact path={el.path} element={el.element} />
                )})
            }
          </Routes>
        </Component.ScrollToTop>
      </Router>
    </Provider>
  );   
}

export default App;

