import Notification from "../Notification/Notification";
import Profile from "../Profile/Profile";

import classes from "./Header.module.scss";


import Questionsmark from "../Questionsmark/Questionsmark";


const Header = () => {
  // const navigate = useNavigate();
  // const goTo = (route: string) => {
  //   navigate(route);
  // };

 return (
    <>
      <div className={classes.heightCompensator}>
      <header className={classes.header}>
        <div className={classes.left}>
          <img className={classes.pageIcon} src="/assets/images/logo.png" alt="logo"/>
          <div className={classes.pageText}>Partner <br/> Platform</div>
          <span className={classes.pageSubText}>BETA Stage</span>
          </div>

        <div className={classes.right}>
        <Questionsmark/> 
          <Notification />
          <Profile />
          
        </div>

      </header>
      </div>
    </>
  );

};

export default Header;
