
import classes from "./LoginWithGoogle.module.scss";
const LoginWithGoogle = () => {
  return (
    <button className={classes.layOut}>
      <img src="/assets/images/google.png" alt="google" />
      <span className={classes.text}>Login with Google</span>

     
    </button>
  )
}

export default LoginWithGoogle