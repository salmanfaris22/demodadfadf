import React, { useState } from "react";
import InputField from "../../../../common/Components/InputField/InputField";
import Button from "../../../../common/Components/Button/Button";
import LoginWithGoogle from "../LoginWithGoogle/LoginWithGoogle";
import classes from "../../Common.module.scss";
import { useNavigate } from "react-router-dom";
import PageAnimation from "../../../../common/Components/PageAnimation/PageAnimation";
import { login } from "../../../../services/auth";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../../../store/authSlice";
import { hideToastById, showToast } from "../../../../store/toastSlice";
import { isValidEmail } from "../../../../utils/emailValidator";



// Type for form data
interface LoginData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle redirect
  const redirect = (url: string) => {
    navigate(url);
  };

  // Handle login submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation checks
    if (!email) {
      dispatch(
        showToast({
          message: "Email is required.",
          type: "warning",
          timeout: 5000,
        })
      );
      return;
    }

    if (!isValidEmail(email)) {
      dispatch(
        showToast({
          message: "Please enter a valid email address.",
          type: "warning",
          timeout: 5000,
        })
      );
      return;
    }

    if (!password) {
      dispatch(
        showToast({
          message: "Password is required.",
          type: "warning",
          timeout: 5000,
        })
      );
      return;
    }

    try {
      const data: LoginData = { email, password };
      const response = await login(data);

      dispatch(setToken(response.token));
      dispatch(setUser({ email: response.email, user_role: response.user_role }));
      dispatch(
        showToast({
          message: "Login successful!",
          type: "success",
          timeout: 5000,
        })
      );
      redirect("/dashboard");
    } catch (error) {
      console.log("Login failed:", error.response.data.error);
      dispatch(
        showToast({
          message: error.response.data.error,
          type: "warning",
          timeout: 5000,
        })
      );
    }finally{
      dispatch(hideToastById(10));

    }
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
                redirect("/forgot");
              }}
              className={classes.subText}
            >
              Forgot Password?
            </div>
            <Button label="Login" type="submit" className={classes.loginButton} />
            <div className={classes.border}>
              <div className={classes.line}></div>
              <span className={classes.lineText}> Or </span>
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
                redirect("/register");
              }}
              className={classes.subText2}
            >
              <span>New user?</span>{" "}
              <span className={classes.subText}>Create account</span>
            </div>
          </form>
        </div>
      </div>
    </PageAnimation>
  );
};

export default LoginPage;
