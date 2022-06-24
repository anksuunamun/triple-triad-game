import { useState } from "react";
import cn from "classnames";
import { ReactComponent as Pen } from "./assets/icon-pen.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import logo from './assets/logo.png';
import style from './Login.module.scss';


const Login = () => {
  const [mode, setMode] = useState('login'); // 'login', 'registration'
  const [loginForm, setLoginForm] = useState(() => ({
    email: '',
    password: '',
  }));

  const [regForm, setRegForm] = useState(() => ({
    signupEmail: '',
    signupPassword: '',
    signupRepeatPassword: '',
  }));

  const [regError, setRegError] = useState('');

  const handleInputChange = (event) => {
    if (mode === 'login') {
      setLoginForm(prev => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
    if (mode === 'registration') {
      // Если вводится пароль/повторение пароля - зачистить ошибку
      if (['signupPassword', 'signupRepeatPassword'].includes(event.target.name)) {
        setRegError('');
      }
      setRegForm(prev => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mode === 'login') {
      console.log('Login form: ', loginForm);
      setLoginForm(prev => ({
        email: '',
        password: '',
      }));
    }
    if (mode === 'registration') {
      if (regForm.signupPassword !== regForm.signupRepeatPassword) {
        setRegError('Passwords do not match!')
      } else {
        console.log('Registration form: ', regForm)
        setRegForm(prev => ({
          signupEmail: '',
          signupPassword: '',
          signupRepeatPassword: '',
        }));
        setRegError('');
        setMode('login');
      }
    }
  };

  return (
    <div className={style.root}>
      <div className={style.headerLogo}>
        <img src={logo} alt="Logo"/>
      </div>
      <div className={cn(
        style.container,
        {[style.active]: mode === 'registration'},
      )}>
        <div className={style.card}/>
        <div className={cn(style.card)}>
          <Heading level={1} className={style.title}>Login</Heading>
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleInputChange}
              value={loginForm.email}
              name="email"
              type="email"
              id="email"
              required="required"
              autoComplete="new-password"
              label="Email"
            />

            <Input
              onChange={handleInputChange}
              value={loginForm.password}
              name="password"
              type="password"
              id="password"
              required="required"
              autoComplete="new-password"
              label="Password"
            />
            <div className={style.buttonContainer}>
              <Button type="submit" theme="reversePink">
                Go
              </Button>
            </div>
          </form>

        </div>
        <div className={cn(style.card, style.alt)}>
          <div
            className={cn(
              style.toggle,
              {[style.active]: mode === 'registration'},
            )}
            onClick={() => setMode('registration')}
          >
            <Pen/>
          </div>
          <Heading level={1} className={style.title}>Register
            <div
              className={cn(
                style.close,
                {[style.active]: mode === 'login'},
              )}
              onClick={() => setMode('login')}
            />
          </Heading>
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleInputChange}
              value={regForm.signupEmail}
              name="signupEmail"
              type="email"
              id="signupEmail"
              required="required"
              autoComplete="new-password"
              label="Email"
              theme="white"
              className={cn(
                {
                  [style.visible]: mode === 'registration',
                  [style.hidden]: mode === 'login'
                },
              )}
            />

            <Input
              onChange={handleInputChange}
              value={regForm.signupPassword}
              name="signupPassword"
              type="password"
              id="signupPassword"
              required="required"
              autoComplete="new-password"
              label="Password"
              theme="white"
              className={cn(
                {
                  [style.visible]: mode === 'registration',
                  [style.hidden]: mode === 'login'
                },
              )}
            />

            <Input
              onChange={handleInputChange}
              value={regForm.signupRepeatPassword}
              name="signupRepeatPassword"
              type="password"
              id="signupRepeatPassword"
              required="required"
              autoComplete="new-password"
              label="Repeat Password"
              theme="white"
              className={cn(
                {
                  [style.visible]: mode === 'registration',
                  [style.hidden]: mode === 'login'
                },
              )}
            />

            {regError && mode === 'registration'
              && <div className={style.error}>{regError}</div>}

            <div className={cn(
              style.buttonContainer,
              {
                [style.visible]: mode === 'registration',
                [style.hidden]: mode === 'login'
              },
            )}>
              <Button type="submit" theme="pink">
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;