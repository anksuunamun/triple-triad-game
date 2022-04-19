import Container from "../Container";
import Heading from "../Heading";
import style from './Slider.module.scss';

const Slider = () => {
  return (
    <section className={style.section}>
      <div className={style.slider}>
        <Container className={style.sliderContent}>
          <Heading level={2} className={style.header} backLine>Triple Triad Game</Heading>
          <Heading level={2} className={style.subheader}>Wow.Wow.Wow</Heading>
          <div className={style.call}>
            <button className={style.button}>Wow</button>
          </div>
        </Container>
      </div>
    </section>
  )
};

export default Slider;