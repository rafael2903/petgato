import React, { useState } from 'react';
import StyledLink from '../../components/StyledLink';
import Input from '../../components/Input';
import PinkLogo from '../../components/PinkLogo';
import Divider from '../../components/Divider';
import InputContainer from '../../components/InputContainer';
import AuthButton from '../../components/AuthButton';

import BackgroundImage from '../../assets/SignUp.jpg';
import StyledText from '../../components/StyledText';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [visible, setVisible] = useState(false);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }    
    
    function handleChangeConfirmPassword(e) {
        setConfirmPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleClick() {
        setVisible( prev => !prev)
      }

    return (
        <Divider src={BackgroundImage}>
            <main>
                <PinkLogo />

                <form onSubmit={handleSubmit} >

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
                        <Input type={visible ? 'text' : 'password'} id="password" value={password} onChange={handleChangePassword} minLength="6" required />
                        
                        {visible ? <BsEyeSlashFill className='eye' size='20px' onClick={handleClick}/> 
                        : <BsEyeFill className='eye' size='20px' onClick={handleClick}/>}
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="password">Confirme sua senha</label>
                        <Input type={visible ? 'text' : 'password'} id="password" value={confirmPassword} onChange={handleChangeConfirmPassword} minLength="6" required />

                        {visible ? <BsEyeSlashFill className='eye' size='20px' onClick={handleClick}/> 
                        : <BsEyeFill className='eye' size='20px' onClick={handleClick}/>}
                    </InputContainer>

                    <AuthButton type="submit">CADASTRAR</AuthButton>

                </form>

                <StyledText>
                    Já possui conta?&nbsp;
                <StyledLink to="/login">Faça Login</StyledLink>
                </StyledText>

            </main>
        </Divider>
    );
}

export default SignUp;