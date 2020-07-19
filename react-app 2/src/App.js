import React, { Component } from "react";
import Nav from "./Nav";
import Movies from "./Movies";
import About from "./About";
import ItemDetail from "./ItemDetail";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={`/movies`}>Go to Movies</Link>
    </div>
  );
};

export default App;
