import React from "react";
import { getUser, removeUserSession } from "../Utils/Common";

const Todolist = (props) => {
    const user = getUser();
console.log(user);
    // Manage logout to login
    const handleLogout = () => {
        removeUserSession();
props.history.push('/')
    }
    return(
        <div> Welcome to Todo List user!! <br/>
            <input type="button" value="Logout" onClick={handleLogout}/>
        </div>


        )
}
export default Todolist;