import Container from "../Container";
import style from './Example.module.css';
import Text from "../Text";

const Example = () => {
  return (
    <section className={style.section}>
      <div className={style.example}>
        <Container className={style.exampleContent}>
          <Text element="div" italic>Italic
            <Text element="span"> div</Text>
          </Text>
          <Text element="p" strong className={style.rebeccapurple}>Bold paragraph</Text>
          <Text disabled>Disabled, without element attribute</Text>
        </Container>
      </div>
    </section>
  )
};

export default Example;