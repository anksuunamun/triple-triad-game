import React from 'react';
import style from './Header.module.css';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
  return (
    <header className={style.root}>
      <div className={style.header}>
        <div className={style.container}>
          <div className={style.logo}/>
          <ul className={style.nav}>
            {MENU.map((item) => <li key={item}><a href="#">{item}</a></li>)}
          </ul>
        </div>
      </div>
    </header>
  )
};

export default Header;