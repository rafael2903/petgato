import { useState, useEffect } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import TitlesContainer from '../../../components/TitlesContainer';
import Main from '../../../components/Main';
import InputContainer from '../../../components/InputContainer';
import AuthButton from '../../../components/AuthButton';
import Input from '../../../components/Input';
import { Section } from './styles';

function EditUser( {token} ) {
    
    const history = useHistory();
    const { id } = useParams();
    
    const [name, setName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [createdAt, setCreatedAt] = useState('');
    const [email, setEmail] = useState('');

    const [send,setSend] = useState(false);

    const config = {
        headers: {
            Authorization: token
        }
    }

    useEffect( () => {
        axios.get('http://localhost:3000/users/' + id, config)
        .then( res => res.data)
        .then( data => {
            setName(data.name);
            setEmail(data.email);
            setIsAdmin(data.is_admin);
            setCreatedAt( () => {
                return data.created_at.split('T')[0].split('-').reverse().join('/');
            });
        });
    },[]);
        
    function handleSubmit(e) {
        e.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, {name, is_admin: isAdmin}, config)
        .then(res => {
            if (res.status === 200) {
                setSend(true);
                setTimeout(() => setSend(false), 2000);
            }
        });
    }

    return (
        <Main>
            <TitlesContainer>
                <h2>backoffice</h2>
                <h1>Editar Usuário</h1>
            </TitlesContainer>

            <Section send={send}>
                    <form onSubmit={handleSubmit}>

                        <InputContainer className='input-container'>
                            <label htmlFor='name'>Nome</label>
                            <Input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required/>
                        </InputContainer>

                        <InputContainer className='input-container'>
                            <label htmlFor='email'>Email</label>
                            <Input type='email' id='email' value={email} disabled/>
                        </InputContainer>

                        <InputContainer className='input-container'>
                            <label htmlFor='userType'>Tipo de Usuário</label>
                            <select id='userType' value={isAdmin} onChange={ (e) => setIsAdmin(e.target.value)} required >
                                <option value={false} >Usuário</option>
                                <option value={true} >Administrador</option>
                            </select>
                        </InputContainer>

                        <InputContainer className='input-container'>
                            <label htmlFor='name'>Data de Ingresso</label>
                            <Input type='text' id='name' value={createdAt} disabled/>
                        </InputContainer>

                        <div className='buttons'>
                            <AuthButton className='backButton' onClick={() => history.goBack()}>Voltar</AuthButton>
                            <AuthButton type='submit' className='sendButton'>Salvar</AuthButton>
                        </div>
                    </form>
            </Section>
        </Main>
    );
}

export default EditUser;