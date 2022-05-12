import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input lable="Amount" />
      <button className={classes.button}>+Add</button>
    </form>
  );
};

export default MealItemForm;
