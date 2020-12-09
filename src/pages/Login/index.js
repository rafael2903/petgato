import { useState } from 'react';
import StyledLink from '../../components/StyledLink';
import Input from '../../components/Input';
import PinkLogo from '../../components/PinkLogo';
import BackgroundImage from '../../assets/Login.jpg';
import Divider from '../../components/Divider';
import InputContainer from '../../components/InputContainer';
import AuthButton from '../../components/AuthButton';
import StyledText from '../../components/StyledText';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>

          <InputContainer>
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" value={email} onChange={handleChangeEmail} required />
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <Input type="password" id="password" value={password} onChange={handleChangePassword} required />
          </InputContainer>

          <AuthButton type="submit">ENTRAR</AuthButton>

        </form>

        <br />
        <StyledLink to="/recovery">Esqueci minha senha</StyledLink><br />
        <StyledText>
          Ainda não tem conta? &nbsp;
          <StyledLink to="/signUp">Crie sua conta</StyledLink>
        </StyledText>
      </main>
    </Divider>
  );
}

export default Login;