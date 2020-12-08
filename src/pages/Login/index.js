import { useState } from 'react';
import StyledLink from '../../components/StyledLink';
import Input from '../../components/Input';
import PinkLogo from '../../components/PinkLogo';
import BackgroundImage from '../../assets/Login.jpg';
import Divider from '../../components/Divider';
import InputContainer from '../../components/InputContainer';

function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }  
  
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('entrou');

  }

  return (
    <Divider src={BackgroundImage}>
      <main>
        <PinkLogo />

        <form onSubmit={handleSubmit} style={{display: 'flex',flexDirection: 'column'}}>

          <InputContainer>
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" value={email} onChange={handleChangeEmail} required/>
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <Input type="password" id="password" value={password} onChange={handleChangePassword} required/>
          </InputContainer>

          <button type="submit">Entrar</button>

        </form>

        <br/><StyledLink to="/">Esqueci minha senha</StyledLink><br/>
        <StyledLink to="/">Crie sua conta</StyledLink>
      </main>
    </Divider>
    );
}

export default Login;