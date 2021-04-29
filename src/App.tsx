import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { EditThing } from "./EditThing";
import UserConfirmation from "./UserConfirmation";

const App: React.FC = () => (
  <Router
    getUserConfirmation={(message, callback) => {
      UserConfirmation(message, callback);
    }}
  >
    <Route exact path="/">
      <h1>Home</h1>
      <p>
        <Link to="/edit">Edit</Link>
      </p>
    </Route>
    <Route exact path="/edit" component={EditThing} />
  </Router>
);

export default App;
