import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListOfPosts from './pages/ListOfPosts';
import PostDetails from './pages/PostDetails/PostDetails';
import { CreateNewPost } from './components/CreateNewPost/CreateNewPost';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <CreateNewPost />
        <Switch>
          <Route exact path="/">
            <ListOfPosts />
          </Route>
          <Route exact path="/post/:id">
            <PostDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
