import React, { useState } from 'react';
import StyledLink from '../../components/StyledLink';
import Input from '../../components/Input';
import PinkLogo from '../../components/PinkLogo';
import Divider from '../../components/Divider';
import InputContainer from '../../components/InputContainer';
import AuthButton from '../../components/AuthButton';

import BackgroundImage from '../../assets/Recovery.jpg';
import StyledText from '../../components/StyledText';
import InputMessage from '../../components/InputMessage';


function Recovery() {

    const [email, setEmail] = useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <Divider src={BackgroundImage}>
            <main>
                <PinkLogo />

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>

                    <InputContainer>
                        <label htmlFor="email">Email</label>
                        <Input type="email" id="email" value={email} onChange={handleChangeEmail} required />
                        <InputMessage>Insira seu email para recuperar a senha</InputMessage>
                    </InputContainer>

                    <AuthButton type="submit">RECUPERAR SENHA</AuthButton>
                </form>

                <StyledText>
                    Lembrou a senha?&nbsp;
                <StyledLink to="/login">Faça Login</StyledLink>
                </StyledText>
                
                <StyledText>
                    Ainda não tem conta?&nbsp;
                <StyledLink to="/signUp">Cadastre-se aqui</StyledLink>
                </StyledText>

            </main>
        </Divider>
    );
}

export default Recovery;