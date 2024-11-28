import React from "react";
import classes from "./Notification.module.scss";



const Notification: React.FC<NotificationProps> = ({ theme }) => {
  return (
    <div className={classes.notification}>
      <div className={classes.notificationWrap}>
        <img
          className={classes.icon}
          src={
            theme === "dark"
              ? "/assets/images/notificationWhite.png"
              : "/assets/images/notification.png"
          }
          alt="notification"
        />
        <div className={classes.dot}></div>
      </div>
      <div className="notificationOuter">
        <div className="notificationBody"></div>
      </div>
    </div>
  );
};

export default Notification;
