import React, { useState } from 'react';
import axios from 'axios';
import StyledLink from '../../components/StyledLink';
import Input from '../../components/Input';
import PinkLogo from '../../components/PinkLogo';
import Divider from '../../components/Divider';
import InputContainer from '../../components/InputContainer';
import InputMessage from '../../components/InputMessage';
import AuthButton from '../../components/AuthButton';
import BackgroundImage from '../../assets/SignUp.jpg';
import StyledText from '../../components/StyledText';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Redirect } from 'react-router-dom';

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [match, setMatch] = useState(true);
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState(false);
    const [redirect, setRedirect] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if( confirmPassword !== password ){
            setMatch(false);
        } else {
            axios.post('http://localhost:3000/users', {name, email, password, password_confirmation: confirmPassword})
            .then(res => {
                if ( res.status === 200 ) {
                    window.alert("Usuário registrado com sucesso!");
                    setRedirect(true);
                }
            })
            .catch( (error) => setError(error));
        }
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
                        <label htmlFor="name">Nome</label>
                        <Input type="text" id="name" value={name} onChange={ (e) => setName(e.target.value)} required />
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="email">Email</label>
                        <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required error={error} />
                        {error ? <InputMessage error>Este email já esta sendo utilizado</InputMessage> : null}
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="password">Senha</label>
                        <Input type={visible ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="8" required />
                        {passwordVisibility()}
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="password_confirmation">Confirme sua senha</label>
                        <Input type={visible ? 'text' : 'password'} id="password_confirmation" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} minLength="8" required error={!match}/>
                        {passwordVisibility()}
                        {match ? <InputMessage>Sua senha deve ter no mínimo 8 caracteres</InputMessage> : <InputMessage error >As senhas não conferem</InputMessage> }
                    </InputContainer>

                    <AuthButton type="submit">CADASTRAR</AuthButton>
                    {redirect ? <Redirect to='/login' /> : null}
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