import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../../../../common/Components/InputField/InputField";
import Button from "../../../../common/Components/Button/Button";
import PageAnimation from "../../../../common/Components/PageAnimation/PageAnimation";

import classes from "../../Common.module.scss";

const ForgotPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Handle the password reset logic here
      console.log("Password reset successful with:", newPassword);
      alert("Your password has been successfully reset.");
      navigate("/login"); // Redirect to login page
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <PageAnimation>
      <div className={classes.loginPage}>
        <div className={classes.wrap}>
          <h2>Reset Your Password</h2>
          <form onSubmit={handlePasswordReset} style={{ marginTop: '80px' }}>
            <InputField
              label="New Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              showPasswordToggle
              togglePasswordVisibility={() => setShowPassword((prev) => !prev)}
            />
            <InputField
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              showPasswordToggle
              togglePasswordVisibility={() => setShowPassword((prev) => !prev)}
            />
            <Button label="Reset Password" type="submit" className={classes.loginButton} />
          </form>
        </div>
      </div>
    </PageAnimation>
  );
};

export default ForgotPassword;
