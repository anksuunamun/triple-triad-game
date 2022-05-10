import { Route, Routes } from 'react-router-dom';
import Main from "./pages/Main";
import Biography from "./pages/Biography";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Characters from "./pages/Characters";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="bio" element={<Characters />}/>
        <Route path="bio/:id" element={<Biography />}/>
        <Route path="about" element={<About />}/>
        <Route path="contacts" element={<Contacts />}/>
      </Route>
    </Routes>
  );
}

export default App;
