import Container from "../Container";
import Heading from "../Heading";
import Button from "../Button";
import style from './Slider.module.scss';

const Slider = () => {
  return (
    <section className={style.section}>
      <div className={style.slider}>
        <Container className={style.sliderContent}>
          <Heading level={2} className={style.header} backLine>Triple Triad Game</Heading>
          <Heading level={2} className={style.subheader}>Wow.Wow.Wow</Heading>
          <div className={style.call}>
            <Button>Wow</Button>
          </div>
        </Container>
      </div>
    </section>
  )
};

export default Slider;