import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'


import Home from './components/Home';
import OperationsDetail from './components/OperationsDetail';
import Login from './components/Login';
import Register from './components/Register';
import UserAccount from './components/UserAccount';




function App() {
  return (
    <div className="body">
      <BrowserRouter>
        
        <Route path='/' exact={true} component={Home} />
        <Route path='/users/login' component={Login} />
        <Route path='/users/register' component={Register} />
        <Route path='/operations' component={OperationsDetail} />
        <Route path='/users/account' component={UserAccount} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
