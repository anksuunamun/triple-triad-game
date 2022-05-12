import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import telegram from './assets/telegram.svg';
import photo from './assets/photo.jpg';
import style from './Contacts.module.scss';

const Contacts = () => {
  return (
    <Container className={style.root}>
      <Heading level={2} backLine>
        Some information about me
      </Heading>

      <div className={style.about}>
        <div className={style.aboutItem}>
          <img src={photo} alt="userPhoto" className={style.photo}/>
        </div>

        <div className={style.aboutItem}>
          <div>
            <Heading level={4} strong>About me</Heading>
            <Text element="p">
              I prefer to spend my free time watching lectures and videos from IT conferences on such subjects as
              frontend, soft skills and personal efficiency. I am also fond of exploring code of different UI libraries
              and it is interesting for me to think about how to solve issues.
            </Text>
          </div>

          <div>
            <Heading level={4} strong>Skills</Heading>
            <Text element="p">
              JavaScript, React, Redux, Typescript, HTML, CSS, Sass, Styled Components, classnames, Redux-Thunk, Axios,
              Storybook, Git, JSDoc
            </Text>
          </div>

          <div>
            <Heading level={4} strong>Contacts</Heading>
            <Text element="div" className={style.contacts}>
              <a href="https://github.com/anksuunamun" target="_blank" rel="noreferrer">
                <img src={github} alt="github" className={style.icon}/>
              </a>
              <a href="https://www.linkedin.com/in/vvgorelova" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin" className={style.icon}/>
              </a>
              <a href="https://t.me/anksuunamun" target="_blank" rel="noreferrer">
                <img src={telegram} alt="telegram" className={style.icon}/>
              </a>
            </Text>
          </div>
        </div>
      </div>

    </Container>
  )
};

export default Contacts;