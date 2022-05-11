import styles from './styles/Login.module.css';

const Login = () => {

  return (
    <form className={ styles.loginForm }>
        <h2>Login</h2>
        <input
          type="text"
          id="user"
          name="user"
          placeholder='Usuário'
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder='Senha'
        />
    </form>
  )
}

export default Login;