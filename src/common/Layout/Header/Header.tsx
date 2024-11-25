import Notification from "../Notification/Notification";
import Profile from "../Profile/Profile";
import classes from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goTo = (route: string) => {
    navigate(route);
  };

  return (
    <>
      <div className={classes.heightCompensator}></div>
      <header className={classes.header}>
        <div className={classes.pageName}>Stream</div>
        <div className={classes.right}>
          <Notification />
          <Profile />
        </div>
      </header>
    </>
  );
};

export default Header;
