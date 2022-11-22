import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as Page from './Page';
import * as Component from './components';
import { createStore } from "redux";
import reducer from "./Bootstraps/reducer";
import { Provider } from "react-redux";

function App() {

  const store = createStore(reducer)


  const pages = [
    {
      path: 'myportofolio/',
      element: <Page.Home />
    },
    {
      path: 'myportofolio/portofolio',
      element: <Page.Portofolio />
    },
    {
      path: 'myportofolio/achievement',
      element: <Page.Achievement />
    },
    {
      path: 'myportofolio/project/:name',
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

