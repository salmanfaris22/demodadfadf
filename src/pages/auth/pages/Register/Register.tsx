import React, { useState } from "react";
// import classes from "./Register.module.scss";
import InputField from "../../../../common/Components/InputField/InputField";
import Button from "../../../../common/Components/Button/Button";
import LoginWithGoogle from "../LoginWithGoogle/LoginWithGoogle";

import classes from "../../Common.module.scss";
import { useNavigate } from "react-router-dom";
import PageAnimation from "../../../../common/Components/PageAnimation/PageAnimation";
const Register: React.FC = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
  };
  const navigate = useNavigate();
  const redirect = (url: string) => {
    navigate(url);
  };

  return (
    <PageAnimation>
    <div className={classes.loginPage}>
      <div className={classes.wrap}>
        <h2>"Create an Account</h2>
        <form onSubmit={handleFormSubmit}>
     
            <InputField
              label="Username"
              type="text"
              placeholder="Eg: yourusername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
          
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
        
         
          <Button
            label={ "Register"}
            type="submit"
            className={classes.loginButton}
          />
          <div className={classes.border}>
            <div className={classes.line}></div>
            <span className={classes.lineText}>Or</span>
            <div className={classes.line}></div>
          </div>
          <div className={classes.moreLoginBtn}>
            <LoginWithGoogle />
            <img
              className={classes.facebookIcon}
              src="/assets/images/facebook.png"
              alt="facebook"
            />
          </div>
          <div
           onClick={() => {
            redirect("/login");
          }}
          className={classes.subText2}>
          <div className={classes.subText2}><span>Already have an account?</span> <span className={classes.subText}>Login</span></div>
          </div>
        </form>
      </div>
    </div></PageAnimation>
  );
};

export default Register;
