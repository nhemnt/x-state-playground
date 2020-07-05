import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './Login';
import Home from "./Home"

const PrivateRoute = ({ component, ...rest }) => {
  const isAuthed = false;
  return (
    <Route {...rest} exact
      render={(props) => (
        isAuthed ? (
          { component }
        ) :
          (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
      )}
    />
  )
}
export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" exact={true} component={Login} />
          <PrivateRoute path="/" exact={true} component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
