import { React, useContext, useEffect, useState } from 'react';
import { UserContext } from '../provider/UserProvider';
import styles from './styles/Login.module.css';

const Login = () => {
  const { user, ...infoContext } = useContext(UserContext);
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
  const [apiMessage, setApiMessage] = useState(undefined);


  const updateFormField = ({ target: { name, value } }) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  const pressFormButton = async ({ target: { name } }) => {
    const fnName = name.split('Btn').shift();
    const fn = infoContext[fnName];

    try {
      const response = await fn(loginForm);
      setApiMessage({ message: response, type: 'success' });
    } catch (e) {
      setApiMessage({ message: e.message, type: 'error' });
    }
  };

  useEffect(() => {
    setTimeout(() => setApiMessage(undefined), 5000);
  }, [apiMessage]);

  useEffect(() => {
    const { username } = user;
    if (username) {
      setLoginForm({ ...loginForm, username });
    }
  }, [user]);

  return (
    <form className={ styles.loginForm }>
        <h2>Login</h2>
        {
          apiMessage && (
            <p
              className={ apiMessage.type === 'error' ? styles.errorMessage : styles.successMessage }
            >{ apiMessage.message }
            </p>
          )
        }
        <input
          type="text"
          name="username"
          placeholder="Usuário"
          value={ loginForm.username }
          onChange={ updateFormField }
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={ loginForm.password }
          onChange={ updateFormField }
        />
        {
          !user.username ? (
            <div className={ styles.loginButtonsDiv }>
            <button
              type="button"
              className={ styles.createUserBtn }
              name="createUserBtn"
              onClick={ pressFormButton }
            >CRIAR USUÁRIO</button>
            <button
              type="button"
              className={ styles.loginBtn }
              name="loginBtn"
              onClick={ pressFormButton }
            >LOGIN
            </button>
            </div>
          ) : (
            <button
              type="button"
              className={ styles.logoutBtn }
              name="logoutBtn"
              onClick={ pressFormButton }
            >LOGOUT
            </button>
          )
        }
    </form>
  );
};

export default Login;