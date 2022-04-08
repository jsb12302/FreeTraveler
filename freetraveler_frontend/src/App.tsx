import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/homepage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
