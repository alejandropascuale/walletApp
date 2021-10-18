import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'


import Home from './components/home/Home';
import Operations from './components/operations/Operations';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
    <div id="body">
      <BrowserRouter>
        
        <Route path='/' exact={true} component={Home} />
        <Route path='/users/login' component={Login} />
        <Route path='/users/register' component={Register} />
        <Route path='/operations' component={Operations} />
        
      </BrowserRouter>
      <script src="/javascripts/index.js"></script>
      <script src="/javascripts/search.js"></script>
    </div>
  );
}

export default App;
