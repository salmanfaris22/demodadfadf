import React, { useState, useEffect } from "react";
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

// Type for the login API response
interface LoginResponse {
  token: string;
  email: string;
  user_role: string;
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle redirect
  const redirect = (url: string) => {
    navigate(url);
  };

  // Validate form inputs
  const validateForm = () => {
    if (email && isValidEmail(email) && password) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  // Call validateForm whenever email or password changes
  useEffect(() => {
    validateForm();
    console.log(isFormValid)
  }, [email, password]);

  // Handle login submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validation check
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

    setLoading(true); // Start loading state
  
    try {
      const data: LoginData = { email, password };
      const response = await login(data);

      // Ensuring response is of type LoginResponse
      const loginResponse: LoginResponse = response as LoginResponse;
  
      dispatch(setToken(loginResponse.token));
      dispatch(setUser({ email: loginResponse.email, user_role: loginResponse.user_role }));
      dispatch(
        showToast({
          message: "Login successful!",
          type: "success",
          timeout: 5000,
        })
      );
      redirect("/dashboard");
    } catch (error: unknown) {
      // Narrowing the error type using instanceof to check for a known error shape
      if (error instanceof Error) {
        console.log("Login failed:", error.message); // Adjust to access the error message
        dispatch(
          showToast({
            message: error.message, // Use the error message
            type: "warning",
            timeout: 5000,
          })
        );
      } else {
        // If error is not an instance of Error, handle it gracefully
        console.log("Login failed with unknown error:", error);
        dispatch(
          showToast({
            message: "An unknown error occurred.",
            type: "warning",
            timeout: 5000,
          })
        );
      }
    } finally {
      setLoading(false); // Stop loading state
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
            <Button 
              label={loading ? "Loading..." : "Login"} 
              type="submit" 
              className={classes.loginButton} 
              // disabled={!isFormValid || loading} 
            />
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
