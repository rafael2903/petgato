import StyledLink from '../../components/StyledLink';
import Input from '../../components/Input';
import PinkLogo from '../../components/PinkLogo';

function Login() {
  return (
    <>
    <PinkLogo />
    <Input type="email" />
    <Input type="password" />
    <StyledLink to="/">Esqueci minha senha</StyledLink>
    <StyledLink to="/">Crie sua conta</StyledLink>
    </>
    );
}

export default Login;