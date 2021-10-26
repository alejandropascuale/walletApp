import React, { useState, useEffect, createContext } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'


import Home from './components/Home';
import OperationsDetail from './components/OperationsDetail';
import Login from './components/Login';
import Register from './components/Register';
import RegisterOk from './components/RegisterOk';
import UserAccount from './components/UserAccount';

export const UserContext = createContext(null);


function App() {
  const [userLogin, setUserLogin] = useState();
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  useEffect(()=>{
  if (getCookie('userEmail') !== '') {
    fetch('http://localhost:3001/api/users')
      .then(response => response.json())
      .then(data => {
        let emailCookie = getCookie('userEmail');
        const user = data.find(u => u.email === emailCookie);
        setUserLogin(user);
      }
      )
    }
  }, [userLogin])

  return (
    <div className="body">
      <UserContext.Provider value={{ userLogin, setUserLogin }}>
        <BrowserRouter>
          <Route path='/' exact={true} component={Home} />
          <Route path='/users/login' component={Login} />
          <Route path='/users/register' component={Register} />
          <Route path='/users/registerOK' component={RegisterOk} />
          <Route path='/operations' component={OperationsDetail} />
          <Route path='/users/account' component={UserAccount} />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
