import Main from '../../components/Main';
import Footer from '../../components/Footer';
import InputContainer from '../../components/InputContainer';
import Input from '../../components/Input';
import dog from '../../assets/contact.jpg';
import { Container } from './styles';

function Contact() {
    return (
        <>
        <Main>
            <Container>
                <figure className='image-container'>
                    <img src={dog} alt=""/>
                </figure>
                <form>
                    <InputContainer className='input-container'>
                        <label htmlFor='name'>Nome</label>
                        <Input type='text' id='name' required/>
                    </InputContainer>
                    <InputContainer className='input-container'>
                        <label htmlFor='email'>Email</label>
                        <Input type='email' id='email' required/>
                    </InputContainer>
                    <InputContainer className='text-container'>
                        <label htmlFor='description'>Mensagem</label>
                        <textarea id='description' placeholder='Digite aqui a sua meow-sagem...' maxLength='1000' required/>
                    </InputContainer>
                </form>
            </Container>
        </Main>
        <Footer />
        </>
    );
}

export default Contact;