import { Outlet } from "react-router-dom";
import classes from "./NonAuth.module.scss";

const NonAuth = () => {
  return (
    <>
      <div className={`${classes.bodyWrap}`}>
        <main className={classes.dashboard}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default NonAuth;
