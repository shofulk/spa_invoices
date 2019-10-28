import React from 'react';
import './App.css';
import MainPage from './containers/MainPage/MainPage';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import CreatePage from './containers/CreatePage/CreatePage';

function App() {

  let router = (
    <Switch>
      <Route path="/create" component={CreatePage}/>
      <Route path="/" component={MainPage} exact/>
      <Redirect to="/"/>
    </Switch>
  );

  return (
    <div>
      {router}
    </div>
  );
}

export default withRouter(App);
