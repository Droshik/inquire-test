import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ListOfPosts from './pages/ListOfPosts';
import PostDetails from './pages/PostDetails/PostDetails';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="appWrapper">
        <Switch>
          <Route exact path="/">
            <ListOfPosts />
          </Route>
          <Route exact path="/post/:id">
            <PostDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
