import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from "./HeaderCartButton.module.css"

export const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
        <span>
            <CartIcon / >
        </span>
        <span>
            Your Cart
        </span>
        <span>
            3
        </span>
    </button>
  )
}
