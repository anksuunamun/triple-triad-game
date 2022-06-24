import { Outlet, useMatch } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  const match = useMatch({ path: '/login' });
  return (
    <>
      {!match && <Header/>}
      <Outlet/>
      <Footer/>
    </>
  )
};

export default Layout;