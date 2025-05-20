import { useEffect, useState } from "react";
import { FormContainer } from "./index.styles";
import Cookies from "js-cookie";
import { Navigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [error_msg, setError_msg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const usernameinput = (event) => {
    setUsername(event.target.value);
  };
  const checkboxval = (event) => {
    setShowPassword(event.target.checked);
  };
  const passwordinput = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitSuccess = (jwt_token) => {
    Cookies.set("jwt_token", jwt_token, { expires: 1 });
   
  }
  const onSubmitFailure = (error_msg) => {
    setError_msg(error_msg);
  } 
const submitForm = async (e) => {
  e.preventDefault();

  const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if(response.ok){
      onSubmitSuccess(data.jwt_token)
    }else{
      onSubmitFailure(data.error_msg)
    }
};
const jwtToken=Cookies.get("jwt_token")
if(jwtToken !== undefined){
  return <Navigate to="/" />
}
  return (
    
    <FormContainer>
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="Username" value={username} onChange={usernameinput} />
        <br/>
        <input type={showPassword?"text":"password"} placeholder="Password" value={password} onChange={passwordinput} />
        
        <br/> 
        <input type="checkbox" checked={showPassword} onChange={checkboxval} /> 
        <label>Show Password</label>
        <br/>
        <button type="submit">Login</button>
        <p>{error_msg}</p>
      </form>
    </FormContainer>
  );
}
export default Login;