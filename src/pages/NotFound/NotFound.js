import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import style from './NotFound.module.scss';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoMain = () => navigate('/');
  return (
    <Container className={style.root}>
      <Heading level={2}>Page not found (⌣́_⌣̀) </Heading>
      <Button theme="dark" onClick={handleGoMain}>Go to the Main page</Button>
    </Container>
  )
};

export default NotFound;