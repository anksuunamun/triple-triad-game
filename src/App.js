import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Text from "./components/Text";
import Example from "./components/Example";

function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <Example>
        <Text element="div" strong>Div</Text>
        <Text element="span" italic>Span</Text>
        <Text element="p" disabled>P</Text>
      </Example>
      <Footer/>
    </>
  );
}

export default App;
