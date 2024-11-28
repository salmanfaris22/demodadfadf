import classes from "./Questionsmark.module.scss";

const Questionsmark = () => {
  return (
    <div className={classes.questionsMark}>
      <img src="/assets/images/questions-mark.png" alt="questions" className={classes.questionsMarkIcon} />
    </div>
  );
}
export default Questionsmark
