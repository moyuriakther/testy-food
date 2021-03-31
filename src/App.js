import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { Container } from "react-bootstrap";
import Home from "./components/Home/Home";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
        <Container>
          <Router>
          <Header/>
            <Switch>
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              {/* <PrivateRoute path="/book/:bedType"> */}
                {/* <Book /> */}
              {/* </PrivateRoute> */}
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </Container>
    </UserContext.Provider>
  );
}

export default App;
