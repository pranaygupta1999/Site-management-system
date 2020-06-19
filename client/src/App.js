import React, { useState } from 'react';
import './App.css';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login"
import { UserContext } from "./Context/UserContext";

function App() {
  let [loggedIn, setLoggedIn] = useState(localStorage.user);
  function onLogin(uname) {
    localStorage.user = { name: uname };
    setLoggedIn(localStorage.user);
  }
  return (
    <React.Fragment>
      <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
        {
          loggedIn ?
            <Home />
            :
            <Login onLogin={onLogin} />
        }
      </UserContext.Provider>
    </React.Fragment>

  );
}

export default App;
