import Container from "../Container";
import style from './Header.module.css';
import logo from '../../assets/logo.png';


const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
  return (
    <header className={style.root}>
      <div className={style.header}>
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