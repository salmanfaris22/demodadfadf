import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal, logout } from "../../../store/auth";
import classes from "./Profile.module.scss";
import { useEffect, useState } from "react";
const imageUrl = import.meta.env.VITE_APP_IMAGE_PATH; // Access Vite env variables

const Profile = () => {
  const userDetails = useSelector((state: any) => state.auth.userDetails);
  const isLoggedIn = useSelector((state: any) => state.auth.token);

  const dispatch = useDispatch();
  const showAuth = useSelector((state: any) => state.auth.showLogin);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(openModal());
    }
  }, []);

  useEffect(() => {
    if (showLogout) {
      const handleClickOutside = (e: any) => {
        if (!e.target.closest(`.logoutwrap`) && !e.target.closest(".proWrap")) {
          setShowLogout(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [showLogout]);

  const loginLogout = () => {
    if (isLoggedIn) {
      if (showLogout) {
        setShowLogout(false);
      } else {
        setShowLogout(true);
      }
    } else {
      dispatch(openModal());
    }
  };

  const logoutUser = () => {
    dispatch(logout());
    setShowLogout(false);
  };

  return (
    <div className={classes.profileWrap}>
      <div className="proWrap">
        <div
          onClick={loginLogout}
          className={`${classes.profileImage} ${
            !userDetails?.image && classes.defaultImg
          }`}
          style={{
            backgroundImage: `url(${
              userDetails?.image
                ? imageUrl + userDetails.image
                : "/assets/images/userDefault.png"
            })`,
            // backgroundImage: `url(${"/assets/images/remove/removeLater.png"})`,
          }}
        ></div>
      </div>
      {showLogout && (
        <div className="logoutwrap">
          <div className={classes.logout} onClick={logoutUser}>
            <img src="/assets/images/logout.png" alt="logout" />
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
