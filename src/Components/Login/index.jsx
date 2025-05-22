import { useEffect, useState } from "react";
import { FormContainer } from "./index.styles";
import Cookies from "js-cookie";
import { Navigate,useNavigate } from "react-router";
import { LogoImg } from "./index.styles"; 
import { InputField,FormStyle,IconImg, FieldWrapper,BackgroundContainer } from "./index.styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [error_msg, setError_msg] = useState("");
  let navigate = useNavigate();
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
    navigate("/", { replace: true });
   
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
    <BackgroundContainer>
      <FormContainer>
  <LogoImg src="https://ik.imagekit.io/y1tcj686k/nxtAssess/Logo%202.png?updatedAt=1747748679469" alt="logo" />
  
  <FormStyle onSubmit={submitForm}>
    <label>Username</label>
    <FieldWrapper>
      <InputField type="text" placeholder="Username" value={username} onChange={usernameinput} />
    </FieldWrapper>

    <label>Password</label>
    <FieldWrapper>
      <IconImg src="https://ik.imagekit.io/y1tcj686k/nxtAssess/Group%2014.png?updatedAt=1747759159805" />
      <InputField type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={passwordinput} />
    </FieldWrapper>

    <div style={{ marginBottom: '15px' }}>
      <input type="checkbox" checked={showPassword} onChange={checkboxval} />
      <label> Show Password</label>
    </div>

    <button type="submit" style={{ width: '100%',backgroundColor:" #088C03" }}>Login</button>
    <p>{error_msg}</p>
  </FormStyle>
</FormContainer>
    </BackgroundContainer>
   
  );
}
export default Login;