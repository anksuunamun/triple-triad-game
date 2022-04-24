import { useEffect, useState } from "react";
import cn from 'classnames';
import Container from "../Container";
import style from './Header.module.scss';
import logo from '../../assets/logo.png';


const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 60) {
        setSmall(true);
      } else {
        setSmall(false);
      }
    };
    window.addEventListener('scroll', handleWindowScroll);

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <header className={style.root}>
      <div className={cn(
        style.header,
        {[style.small]: small}
      )}>
        <Container className={style.headerWrap}>
          <div>
            <img src={logo} alt="Logo" className={style.logo}/>
          </div>
          <ul className={style.nav}>
            {MENU.map((item) => <li key={item}><a href="/">{item}</a></li>)}
          </ul>
        </Container>
      </div>
    </header>
  )
};

export default Header;