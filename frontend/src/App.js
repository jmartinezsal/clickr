import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session.js";

import LoginFormPage from "./components/LoginFormPage";
import ExplorePage from "./components/ExplorePage"
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import UploadImagePage from './components/UploadImage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <ExplorePage />
          </Route>
          <Route path="/explore">
            <ExplorePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/upload">
            <UploadImagePage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
