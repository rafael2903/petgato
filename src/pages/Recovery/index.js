import { useState } from 'react';
import axios from 'axios';
import StyledLink from '../../components/StyledLink';
import Input from '../../components/Input';
import PinkLogo from '../../components/PinkLogo';
import Divider from '../../components/Divider';
import InputContainer from '../../components/InputContainer';
import AuthButton from '../../components/AuthButton';

import BackgroundImage from '../../assets/Recovery.jpg';
import StyledText from '../../components/StyledText';
import InputMessage from '../../components/InputMessage';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function Recovery() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/recovery', {email})
        .then( res => {
            if(res.status === 200){
                window.alert("Uma nova senha foi encaminhada para seu email.");
                setError(false);
                setSuccess(true);
            }
        })
        .catch( () => setError(true))
    }

    return (
        <Divider src={BackgroundImage}>
            <main>
                <PinkLogo />

                <form onSubmit={handleSubmit} >

                    <InputContainer>
                        <label htmlFor="email">Email</label>
                        <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required error={error} />
                        {error ? <InputMessage error>Email não encontrado</InputMessage> : <InputMessage>Insira seu email para recuperar a senha</InputMessage>}
                    </InputContainer>

                    <AuthButton type="submit">RECUPERAR SENHA</AuthButton>
                    {success ? <Redirect to='/login' /> : null}
                </form>

                <StyledText>
                    Lembrou a senha?&nbsp;
                    <StyledLink to="/login">Faça Login</StyledLink>
                </StyledText>
                
                <StyledText>
                    Ainda não tem conta?&nbsp;
                    <StyledLink to="/signup">Cadastre-se aqui</StyledLink>
                </StyledText>

            </main>
        </Divider>
    );
}

export default Recovery;