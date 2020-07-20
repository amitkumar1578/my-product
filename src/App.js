import React from 'react';
import login from './login';
import dashboard from './dashboard';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';




var logedIn;
if (localStorage.getItem('logedIn')) {
  logedIn = localStorage.getItem('logedIn');
}
else {
  logedIn = false;
}


function App() {

  if (logedIn) {
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/dashboard" exact component={dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
  else {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={login} />
          <Route
            render={otherProps => (
              <Redirect
                to={{
                  pathname: "/",

                }}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;
