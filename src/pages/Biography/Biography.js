import { useParams } from "react-router-dom";
import style from './Biography.module.scss';
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Container from "../../components/Container";
import { BIO } from "../../constants/bio";


const getBiographyBlock = (field, index) => {
  switch (field.type) {
    case 'h1': {
      return <Heading level={1} key={index}>{field.text}</Heading>
    }
    case 'h2': {
      return <Heading level={2} key={index}>{field.text}</Heading>
    }
    case 'paragraph': {
      return <Text element="p" className={style.paragraph} key={index}>{field.text}</Text>
    }
    case 'img': {
      return <div className={style.imgWrapper} key={index}>
        <img src={field.src} className={style.img} alt=""/>
      </div>
    }
    default: {
      return <></>
    }
  }
};

const Biography = () => {
  const { id } = useParams();
  return (
    <div className={style.root}>
      <div className={style.biography}>
        <Container className={style.biographyContent}>
          {BIO[id].map((field, index) => getBiographyBlock(field, index))}
        </Container>
      </div>
    </div>
  )
};

export default Biography;