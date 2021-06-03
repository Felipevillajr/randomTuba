import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/SignIn/Signin";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/home" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
