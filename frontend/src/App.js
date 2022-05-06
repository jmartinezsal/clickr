import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session.js";

import SplashPage from "./components/SplashPage";
import LoginFormPage from "./components/LoginFormPage";
import ExplorePage from "./components/ExplorePage"
import SignupFormPage from "./components/SignupFormPage";
import ImagePage from "./components/ImagePage/index.js";
import Navigation from "./components/Navigation";
import UploadImagePage from './components/UploadImage';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [path, setPath] = useState('')

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    setPath(window.location.pathname)
  }, [dispatch, path]);

  return (
    <>
      <Navigation isLoaded={isLoaded}  path={path}/>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/explore">
            <ExplorePage />
          </Route>
          <Route path="/upload">
            <UploadImagePage />
          </Route>
          <Route path="/images/:imageId" >
            <ImagePage />
          </Route>
          <Route>
            Page Not found
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
