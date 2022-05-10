import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cn from 'classnames';
import Container from "../Container";
import style from './Header.module.scss';
import logo from '../../assets/logo.png';


const MENU = [
  {path: '/', name: 'Main'},
  {path: '/bio', name: 'Characters'},
  {path: '/about', name: 'About'},
  {path: '/contacts', name: 'Contacts'},
];

const Header = () => {
  const navigate = useNavigate();
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

  const handleLogoClick = () => navigate('/');

  return (
    <header className={style.root}>
      <div className={cn(
        style.header,
        {[style.small]: small}
      )}>
        <Container className={style.headerWrap}>
          <div onClick={handleLogoClick}>
            <img src={logo} alt="Logo" className={style.logo}/>
          </div>
          <ul className={style.nav}>
            {MENU.map((item) =>
              <li key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            )}
          </ul>
        </Container>
      </div>
    </header>
  )
};

export default Header;