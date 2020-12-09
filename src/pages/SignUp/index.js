import React, { useState } from 'react';
import StyledLink from '../../components/StyledLink';
import Input from '../../components/Input';
import PinkLogo from '../../components/PinkLogo';
import Divider from '../../components/Divider';
import InputContainer from '../../components/InputContainer';
import AuthButton from '../../components/AuthButton';

import BackgroundImage from '../../assets/Login.jpg';
import StyledText from '../../components/StyledText';


function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

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
                        <label htmlFor="name">Nome</label>
                        <Input type="text" id="name" value={name} onChange={handleChangeName} required />
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="email">Email</label>
                        <Input type="email" id="email" value={email} onChange={handleChangeEmail} required />
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="password">Senha</label>
                        <Input type="password" id="password" value={password} onChange={handleChangePassword} required />
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="password">Confirme sua senha</label>
                        <Input type="password" id="password" value={password} onChange={handleChangePassword} required />
                    </InputContainer>

                    <AuthButton type="submit">CADASTRAR</AuthButton>

                </form>

                <br />
                <StyledText>
                    Já possui conta?&nbsp;
                <StyledLink to="/login">Faça Login</StyledLink>
                </StyledText>

            </main>
        </Divider>
    );
}

export default SignUp;