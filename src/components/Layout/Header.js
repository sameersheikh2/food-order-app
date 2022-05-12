import React from "react";
import MealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <fragment>
      <header className={classes.header}>Our Meals</header>
      <button>Cart</button>
      <div className={classes["main-image"]}>
        <img src={MealsImg} />
      </div>
      ;
    </fragment>
  );
};

export default Header;
