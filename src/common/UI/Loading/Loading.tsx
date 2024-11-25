import React from "react";
import PageAnimation from "../../Components/PageAnimation/PageAnimation";
import classes from "./Loading.module.scss";

interface LoadingProps {
  theme?: "dark" | "small" | string; // define the possible values for theme or add more if needed
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ theme = "", text = "" }) => {
  return (
    <PageAnimation>
      <div
        className={`${classes.loading} ${
          theme === "dark" ? classes.dark : ""
        } ${theme === "small" ? classes.small : ""} ${
          theme === "smaller" ? classes.smaller : ""
        }`}
      >
        <div className={classes.logoOuter}>
          <img src="/assets/images/depined/logoSIlver.png" alt="Logo" />
          <div>{text}</div>
        </div>
      </div>
    </PageAnimation>
  );
};

export default Loading;
