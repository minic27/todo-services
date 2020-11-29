import React from "react";

// router
import { Switch, Route } from "react-router-dom";

// components
import Home from "./containers/Home";
import Product from "./containers/Product";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </>
  );
}

export default App;
