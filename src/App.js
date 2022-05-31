import { useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from "./pages/Main";
import Biography from "./pages/Biography";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Characters from "./pages/Characters";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  const {pathname, hash} = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1)).scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      });
    } else {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="characters" element={<Characters/>}/>
        <Route path="characters/:id" element={<Biography/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
