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
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";


function Login( {setloggedIn, setId, setToken, setAdmin}) {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false)

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

  function passwordVisibility() {
    if (visible) 
        return <BsEyeSlashFill className='eye' size='20px' onClick={() => setVisible( prev => !prev)}/>;
    else 
        return <BsEyeFill className='eye' size='20px' onClick={() => setVisible( prev => !prev)}/>;
  }

  return (
    <Divider src={BackgroundImage}>
      <main>
        <PinkLogo />

        <form onSubmit={handleSubmit} >

          <InputContainer>
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <Input type={visible ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="6" required />
            {error ? <InputMessage className='error' error>Email ou senha inválidos</InputMessage> : null}
            {passwordVisibility()}
          </InputContainer>

          <AuthButton type="submit">ENTRAR</AuthButton>

        </form>

        <br />
        <StyledLink to="/recovery">Esqueci minha senha</StyledLink>

        <StyledText>
          Ainda não tem conta? &nbsp;
          <StyledLink to="/join">Crie sua conta</StyledLink>
        </StyledText>

      </main>
    </Divider>
  );
}

export default Login;