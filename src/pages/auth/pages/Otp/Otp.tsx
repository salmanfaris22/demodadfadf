import { useState, useRef } from "react";
import classes from "./Otp.module.scss"; // Import your CSS module for styling
import Button from "../../../../common/Components/Button/Button";
import PageAnimation from "../../../../common/Components/PageAnimation/PageAnimation";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "",""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [timer, setTimer] = useState<number>(60); // Set a 60-second timer
  const email = "davis99davis@gmail.com"; // Replace with dynamic data if needed
  const navigate = useNavigate();
  const redirect = (url: string) => {
    navigate(url);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) { // Accepts only one digit (0-9)
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Move to the next input if valid
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, otp.length).split("");
    setOtp((prev) =>
      pastedData.map((value, index) => (index < otp.length ? value : prev[index]))
    );
  };

  const resendOtp = () => {
    setOtp(["", "", "", "", ""]);
    setTimer(60); // Reset the timer
    // Logic to resend OTP
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === otp.length) {
      console.log("OTP Verified:", enteredOtp);
      // Call the API to verify the OTP
      redirect("/forgot");
    } else {
      alert("Please fill all OTP fields");
    }
  };

  // Timer countdown
  if (timer > 0) {
    setTimeout(() => setTimer(timer - 1), 1000);
  }

  return (
    <PageAnimation>
    <div className={classes.otpContainer}>
      <h2 >Verify OTP</h2>
      <p>Enter OTP sent to <b>{email}</b></p>

    
      <div className={classes.otpInput}>
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={(el) => (inputRefs.current[index] = el!)}
            maxLength={1}
          />
        ))}
      </div>
      <div className={classes.timer}>
        Time remaining: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
      </div>
      <div className={classes.resend}>
        OTP not received? <span  className={classes.resendOTP} onClick={resendOtp}>Resend now</span>
      </div>
      <Button label="Verify OTP" type="submit" onClick={()=>handleSubmit()} className={classes.verifyButton} />
   
      <div className={classes.footer}>
        Remember password? <a href="/login">Login</a>
      </div>
    </div></PageAnimation>
  );
};

export default Otp;
