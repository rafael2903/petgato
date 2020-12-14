import { useState } from 'react';
import axios from 'axios';
import StyledLink from '../../components/StyledLink';
import Input from '../../components/Input';
import PinkLogo from '../../components/PinkLogo';
import BackgroundImage from '../../assets/Login.jpg';
import Divider from '../../components/Divider';
import InputContainer from '../../components/InputContainer';
import AuthButton from '../../components/AuthButton';
import StyledText from '../../components/StyledText';
import InputMessage from '../../components/InputMessage';

function Login( {setloggedIn, setId, setToken, setAdmin}) {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/login', {email, password})
    .then(res => {
      if ( res.status === 200 ) {
      
        setloggedIn(true)
        localStorage.setItem('loggedIn', 'true');

        setId(res.data.id);
        localStorage.setItem('id', res.data.id);
        
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);

        setAdmin(res.data.is_admin);
        localStorage.setItem('admin', res.data.is_admin);
      }
    })
    .catch( () => setError(true) );
  }

  return (
    <Divider src={BackgroundImage}>
      <main>
        <PinkLogo />

        <form onSubmit={handleSubmit} >

          <InputContainer>
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" value={email} onChange={handleChangeEmail} required />
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <Input type="password" id="password" value={password} onChange={handleChangePassword} required />
            {error ? <InputMessage className='error' error={error}>Email ou senha inválido</InputMessage> : null}

          </InputContainer>

          <AuthButton type="submit">ENTRAR</AuthButton>

        </form>

        <br />
        <StyledLink to="/recovery">Esqueci minha senha</StyledLink>

        <StyledText>
          Ainda não tem conta? &nbsp;
          <StyledLink to="/signup">Crie sua conta</StyledLink>
        </StyledText>

      </main>
    </Divider>
  );
}

export default Login;