import classes from "./NoData.module.scss";

const NoData = ({ title = "No Data", description = "" }) => {
  return (
    <div className={classes.noData}>
      <div className={classes.noDatInner}>
        <img src="/assets/images/noData.png" alt="nodata" />
        <div className={classes.title}>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default NoData;
