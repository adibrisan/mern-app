import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewPlace from "./places/pages/NewPlace";

import { AuthContext } from "./shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" component={Users} exact />
        <Route path="/:userId/places" component={UserPlaces} exact />
        <Route path="/places/new" component={NewPlace} exact />
        <Route path="/places/:placeId" component={UpdatePlace} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" component={Users} exact />
        <Route path="/:userId/places" component={UserPlaces} exact />
        <Route path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
