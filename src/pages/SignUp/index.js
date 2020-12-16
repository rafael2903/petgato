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
    const [errors, setErrors] = useState('');
    const [redirect, setRedirect] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if(confirmPassword === password){
            axios.post('http://localhost:3000/users', {name,email,password})
            .then(res => {
                setErrors(res.data.errors);
                if ( res.status === 200 ) {
                    window.alert("Usuário registrado com sucesso!");
                    setRedirect(true);
                    setErrors('');
                }
            })
            .catch( (e) => {
                setErrors(e.response.data.errors);
            } );
        } else {
            setMatch(false);
        }
    }

    function passwordVisibility() {
        if (visible) 
            return <BsEyeSlashFill className='eye' size='20px' onClick={() => setVisible( prev => !prev)}/>;
        else 
            return <BsEyeFill className='eye' size='20px' onClick={() => setVisible( prev => !prev)}/>;
    }

    function checkPassword(passInput){
        //setConfirmPassword(passInput.value);
        if(passInput.value !== password ){
            passInput.setAttribute('error', true);
            setMatch(false);
        } else {
            passInput.setAttribute('error', false);
            setMatch(true);
        }
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
                        <Input type="email" id="email" value={email} onBlur={() => setErrors('')}
                        onChange={(e) => setEmail(e.target.value)} required error={errors}/>
                        {errors ? <InputMessage className='error' error>Este email já esta sendo utilizado</InputMessage> : null}
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="password">Senha</label>
                        <Input type={visible ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="6" required />
                        {passwordVisibility()}
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="password_confirmation">Confirme sua senha</label>
                        <Input type={visible ? 'text' : 'password'} id="password_confirmation" value={confirmPassword} error={!match}
                        onChange={(e) => setConfirmPassword(e.target.value)} onBlur={e => checkPassword(e.target)} minLength="6" required />
                        {passwordVisibility()}
                        {match ? null : <InputMessage className='error' error>As senhas não conferem</InputMessage> }
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