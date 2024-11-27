import React, { useState } from "react";


import InputField from "../../../../common/Components/InputField/InputField";
import Button from "../../../../common/Components/Button/Button";
import LoginWithGoogle from "../LoginWithGoogle/LoginWithGoogle";
import classes from "../../Common.module.scss";
import { useNavigate } from "react-router-dom";
import PageAnimation from "../../../../common/Components/PageAnimation/PageAnimation";
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const redirect = (url: string) => {
    navigate(url);
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <PageAnimation>
   <div className={classes.loginPage}>
     <div className={classes.wrap}>
      <h2>Login to your Account</h2>
      <form onSubmit={handleLogin}>
        <InputField
          label="Email"
          type="email"
          placeholder="Eg: yourname@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPasswordToggle
          togglePasswordVisibility={() => setShowPassword((prev) => !prev)}
        />
        <div
         onClick={() => {
          redirect("/otp/2");
        }}
        className={classes.subText}>Forgot Password ?</div>
        <Button label="Login" type="submit" className={classes.loginButton} />
       
       <div className={classes.border}>
        <div className={classes.line}></div>
        <span className={classes.lineText}> Or </span>
        <div className={classes.line}></div>
    
       </div>
       <div
       
       className={classes.moreLoginBtn}><LoginWithGoogle/><img className={classes.facebookIcon} src="/assets/images/facebook.png" alt="facebook" /></div>
<div 
 onClick={() => {
  redirect("/register");
}}
className={classes.subText2}><span>New user?</span> <span className={classes.subText}>Create account</span></div>
      </form>
    </div>
   </div></PageAnimation>
  );
};

export default LoginPage;
