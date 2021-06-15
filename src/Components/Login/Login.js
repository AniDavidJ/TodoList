import React,{useState} from "react";
import  "./Login.css";
import axios from "axios";
import { setUserSession } from "../Utils/Common";

const Login = (props) => {

 const [username,setUsername] = useState('');
 const [password,setPassword] = useState('');
 const [error,setError] = useState(null);
 const [loading,setLoading] = useState(false);

   const handleLogin = () => {
       setError(null);
       setLoading(true);
       // Integrate signin API
       axios.post("http://localhost:4000/users/signin",{
           username: username,
        password: password
       }).then(response =>{

        setLoading(false);
        setUserSession(response.data.token, response.data.user)
        props.history.push('/todo');
        console.log("response >> ",response);
       }).catch(error => {
        setLoading(false);
        if(error.response.status ===401 || error.response.status === 400){
            setError(error.response.data.message);
        }else{
            setError("Something went wrong. Please try again later!!")
        }
        console.log("error >> ",error);

       });
   } 
    return(
        <div> 
          <div className="login-wrap">
	<div className="login-html">
		<label for="tab-1" className="tab">Sign In</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input value={username} onChange={event => setUsername(event.target.value)} id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label for="pass" className="label"  >Password</label>
					<input value={password} onChange={event => setPassword(event.target.value)} id="pass" type="password" className="input" data-type="password"/>
				</div>
				{error && <div className="error">{error}</div>}
				<div className="group">
					<input type="button" className="button" value={loading ? "loading.." : "Login"} disabled={loading} onClick={handleLogin}/>
				</div>
				
			</div>
	
		</div>
	</div>
</div>

        </div>
    )
}
export default Login;