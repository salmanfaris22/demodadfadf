import React, { useState } from "react";


import InputField from "../../../../common/Components/InputField/InputField";
import Button from "../../../../common/Components/Button/Button";

import classes from "../../Common.module.scss";
import { useNavigate } from "react-router-dom";
import PageAnimation from "../../../../common/Components/PageAnimation/PageAnimation";
const CollectEmail: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const redirect = (url: string) => {
    navigate(url);
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    redirect("/otp/2");
  };

  return (
    <PageAnimation>
   <div className={classes.loginPage}>
     <div className={classes.wrap}>
      <h2>Enter to your Email</h2>
      <form onSubmit={handleLogin}>
        <InputField
          label="Email"
          type="email"
          placeholder="Eg: yourname@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
         onClick={() => {
            redirect("/otp/2");
          }}
        label="Get OTP" type="submit" className={classes.loginButton} />

      </form>
    </div>
   </div></PageAnimation>
  );
};

export default CollectEmail;
