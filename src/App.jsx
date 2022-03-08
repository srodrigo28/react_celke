import React from 'react';
// https://reactrouter.com/docs/en/v6/getting-started/overview
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './pages/Login'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
