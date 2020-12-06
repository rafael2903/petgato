import StyledLink from '../../components/StyledLink';
import Input from '../../components/Input';
import PinkLogo from '../../components/PinkLogo';
import BackgroundImage from '../../assets/Login.jpg';
import Divider from '../../components/Divider';

function Login() {

  return (
    <Divider src={BackgroundImage}>
      <div>
        <PinkLogo />
        <Input type="email" />
        <Input type="password" />
        <StyledLink to="/">Esqueci minha senha</StyledLink>
        <StyledLink to="/">Crie sua conta</StyledLink>
      </div>
    </Divider>
    );
}

export default Login;