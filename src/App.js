import React, { useState , useEffect } from "react";
import { BrowserRouter, Switch, NavLink } from "react-router-dom";
import Todolist from "./Components/Todo/Todolist";
import Login from "./Components/Login/Login";

import PublicRoute from "./Components/Utils/PublicRoute";
import PrivateRoute from "./Components/Utils/PrivateRoute";
import { getToken, removeUserSession, setUserSession } from "./Components/Utils/Common";
import axios from "axios";

function App() {

    const [authLoading, setAuthLoading] = useState(true);

useEffect(() => {
  const token = getToken();
  if(!token){
      return;
  }
axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
setUserSession(response.data.token,response.data.user);
setAuthLoading(false);
}).catch(error => {
    removeUserSession();
    setAuthLoading(false);
});

}, []);

if(authLoading && getToken()) {
    return <div className="content">Checking Authentiction...</div>
}
    return (
        <div className="App">
            <BrowserRouter>
                <div className="header">
                <div className="header-sub">
                    <NavLink exact activeClassName="active" to="/">
                        Login
                    </NavLink>
                    <NavLink activeClassName="active" to="/todo">
                        TodoList
                    </NavLink>
                </div> 
                </div>
                <div className="content">
                    <Switch>
                        {/* Created public and private routes */}
                      <PublicRoute exact path="/" component={Login} />
                      <PrivateRoute path="/todo" component={Todolist} />

                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
