import { Fragment } from 'react';
import React from 'react';
import HeaderCartButton from './HeaderCartButton';
//import mealsImage from '../../assets/meals.js';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src="https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?size=626&ext=jpg&ga=GA1.2.1166339298.1652269237" alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
