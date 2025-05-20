import { useEffect, useState } from "react";
import { FormContainer } from "./index.styles";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const usernameinput = (event) => {
    setUsername(event.target.value);
  };
  
  const passwordinput = (event) => {
    setPassword(event.target.value);
  };
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
};

  return (
    
    <FormContainer>
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="Username" value={username} onChange={usernameinput} />
        <br/>
        <input type="password" placeholder="Password" value={password} onChange={passwordinput} />
        <br/>
        <button type="submit">Login</button>
      </form>
    </FormContainer>
  );
}
export default Login;