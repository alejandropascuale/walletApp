import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'


import Home from './components/Home';
import Operations from './components/Operations';
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
        <Route path='/operations' component={Operations} />
        <Route path='/users/account' component={UserAccount} />
        
      </BrowserRouter>
      <script src="/javascripts/index.js"></script>
      <script src="/javascripts/search.js"></script>
    </div>
  );
}

export default App;
