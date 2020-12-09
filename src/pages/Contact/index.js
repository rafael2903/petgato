import { useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import InputContainer from '../../components/InputContainer';
import Input from '../../components/Input';
import AuthButton from '../../components/AuthButton';
import dog from '../../assets/contact.jpg';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const data = {
        name, email, description
    }
    const setFunctions = {
        name: setName,
        email: setEmail,
        description: setDescription
    }
    function handleChange(e) {
        const id = e.target.id;
        setFunctions[id](e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/contacts', data)
        .then(res => console.log(res))
    }

    return (
        <>
        <Footer />
        <Main>
            <Container>
                <figure className='image-container'>
                    <img src={dog} alt=""/>
                </figure>
                <section >
                    <div className='titles-container'>
                        <h2>Fale conosco</h2>
                        <h1>Envie-nos uma mensagem de contato</h1>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <InputContainer className='input-container'>
                            <label htmlFor='name'>Nome</label>
                            <Input type='text' id='name' value={name} onChange={handleChange} required/>
                        </InputContainer>
                        <InputContainer className='input-container'>
                            <label htmlFor='email'>Email</label>
                            <Input type='email' id='email' value={email} onChange={handleChange} required/>
                        </InputContainer>
                        <InputContainer className='text-container'>
                            <label htmlFor='description'>Mensagem</label>
                            <textarea id='description' placeholder='Digite aqui a sua meow-sagem...' maxLength='1200' value={description} onChange={handleChange} required/>
                        </InputContainer>
                        <AuthButton type='submit'>Enviar</AuthButton>
                    </form>
                </section>
            </Container>
        </Main>
        <Footer />
        </>
    );
}

export default Contact;