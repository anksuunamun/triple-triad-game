import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Text from "./components/Text";
import Container from "./components/Container";
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <section className="section">
        <Container className="example">
          <Text element="div" italic>Italic
            <Text element="span"> div</Text>
          </Text>
          <Text element="p" strong className="rebeccapurple">Bold paragraph</Text>
          <Text disabled>Disabled, without element attribute</Text>
        </Container>
      </section>
      <Footer/>
    </>
  );
}

export default App;
