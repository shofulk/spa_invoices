import React from 'react';
import './App.css';
import MainPage from './containers/MainPage/MainPage';
import { Route, Router, Redirect} from 'react-router-dom';
import CreatePage from './containers/CreatePage/CreatePage';
import history from './history/history';
import EditPage from './containers/EditPage/EditPage';

function App() {

  let router = (
      <Router history={history}>
        <Route path="/create" component={CreatePage}/>
        <Route path="/edit/:id" component={EditPage}/>
        <Route path="/" component={MainPage} exact/>
        <Redirect to="/"/>
      </Router>
  );

  return (
    <div>
      {router}
    </div>
  );
}

export default App;
