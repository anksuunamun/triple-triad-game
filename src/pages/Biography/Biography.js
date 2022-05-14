import { useNavigate, useParams, Navigate } from "react-router-dom";
import { BIO } from "../../constants/bio";
import style from './Biography.module.scss';
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { ReactComponent as Anchor } from './assets/link_icon.svg';


const getBiographyBlock = (field, index, handleAnchorClick) => {
  switch (field.type) {
    case 'h1': {
      return <Heading level={1} key={index}>{field.text}</Heading>
    }
    case 'h2': {
      return <Heading level={2} key={index} className={style.anchorHeading}>
        {field.text}
        <span className={style.anchor} id={getAnchorId(field.text)} onClick={handleAnchorClick}>
          <Anchor/>
        </span>
      </Heading>
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

const getAnchorId = (text) => text.split(' ').join('_');

const Biography = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => navigate(-1);

  const getHandleAnchorClick = (field) => () => {
    const anchor = getAnchorId(field.text);
    navigate(`#${anchor}`);
  };

  if (typeof BIO[id] === "undefined") {
    return <Navigate to="/characters" replace/>
  }

  return (
    <div className={style.root}>
      <div className={style.biography}>
        <Button
          theme="dark"
          onClick={handleBackClick}
        >
          Back
        </Button>
        <Container className={style.biographyContent}>
          {BIO[id].map((field, index) => getBiographyBlock(field, index, getHandleAnchorClick(field)))}
        </Container>
      </div>
    </div>
  )
};

export default Biography;