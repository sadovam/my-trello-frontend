import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Board from './pages/Board/Board';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/board">
            <Board />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
