import { useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import Main from '../../components/Main';
import InputContainer from '../../components/InputContainer';
import Input from '../../components/Input';
import AuthButton from '../../components/AuthButton';
import dog from '../../assets/contact.jpg';
import TitlesContainer from '../../components/TitlesContainer';

function Contact() {

    const [send,setSend] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const data = {
        name, email, description
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/contacts', data)
        .then(res => {
            if (res.status === 201) {
                setSend(true);
                setName('');
                setEmail('');
                setDescription('');
                setTimeout(() => setSend(false), 2000);
            }
        })
    }

    return (
        <Main centered>
            <Container send={send}>
                <figure className='image-container'>
                    <img src={dog} alt=""/>
                </figure>
                <section >
                    <TitlesContainer>
                        <h2>Fale conosco</h2>
                        <h1>Envie-nos uma mensagem de contato</h1>
                    </TitlesContainer>

                    <form onSubmit={handleSubmit}>
                        <InputContainer className='input-container'>
                            <label htmlFor='name'>Nome</label>
                            <Input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required/>
                        </InputContainer>
                        <InputContainer className='input-container'>
                            <label htmlFor='email'>Email</label>
                            <Input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </InputContainer>
                        <InputContainer className='text-container'>
                            <label htmlFor='description'>Mensagem</label>
                            <textarea id='description' placeholder='Digite aqui a sua meow-sagem...' maxLength='1200' value={description} onChange={(e) => setDescription(e.target.value)} required/>
                        </InputContainer>
                        <AuthButton hollow type='submit' className='sendButton'>ENVIAR</AuthButton>
                    </form>
                </section>
            </Container>
        </Main>
    );
}

export default Contact;