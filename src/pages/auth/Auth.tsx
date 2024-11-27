import { Outlet } from "react-router-dom";
import classes from "./Auth.module.scss";

const Authentication = () => {
  return (
    <div className={classes.globalOuter}>
      <div className={classes.authWrap}>
        <div className={classes.authImage}>
          <div className={classes.authContent}>
            <img src="/assets/images/logo.png" alt="logo"  className={classes.authlogo}/>
            <span>Partner <br /> Platform</span>
          </div>
          
         <div className={classes.sideImageMain}>
         <img
            src="/assets/images/authImg.png"
            alt="authSideimg"
            className={classes.sideImage}
          />
         </div>
         
          <div className={classes.authText}>Start negotiating in  real-time and discover the deal that’s right for you.</div>
          <img src="/assets/images/authBg.png" alt=""    className={classes.authMainImage}/>
        </div>
        <div className={classes.authForm}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
