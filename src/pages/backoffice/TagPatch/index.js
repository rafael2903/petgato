import { useEffect, useState } from 'react';
import { useParams, useLocation, Redirect } from 'react-router-dom';
import axios from 'axios';

import Main from '../../../components/Main';
import TitlesContainer from '../../../components/TitlesContainer';
import Input from '../../../components/Input';
import InputContainer from '../../../components/InputContainer';
import AuthButton from '../../../components/AuthButton';

const TagPatch = ({type}) => {

    const location = useLocation();

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [redirect, setRedirect] = useState(false);

    useEffect( () => {
        if(type === 'edit' && location.state){
            setId(location.state.id);
            setName(location.state.name);
            setDescription(location.state.description);
        }
    }, [type, location.state])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(type === 'edit'){
            axios.put(`http://localhost:3000/tags/${id}`, {name, description})
            .then( res => {
                if(res.status === 204){
                    window.alert("Tag editada com sucesso!");
                }
                setRedirect(true);
            })
            .catch( err => {
                window.alert("Não foi possivel salvar\n" + err);
                setRedirect(true);
            })
        } else {
            axios.post(`http://localhost:3000/tags`, {name, description})
            .then( res => {
                if(res.status === 201){
                    window.alert("Tag criada com sucesso!");
                }
                setRedirect(true);
            })
            .catch( err => {
                window.alert("Não foi possivel criar\n" + err);
                setRedirect(true);
                console.log(err);
            })
        }
    }

    return (
        <Main>
            <TitlesContainer>
                <h2>Backoffice</h2>
                <h1>{type === 'create' ? 'Criar' : 'Editar'} tag</h1>
            </TitlesContainer>
            <br />
            <form onSubmit={handleSubmit} style={{maxWidth: '700px'}}>

                <InputContainer>
                    <label htmlFor="name">Nome da tag</label>
                    <Input type='text' id="name" value={name} 
                    onChange={(e) => setName(e.target.value)} required />
                </InputContainer>
                <br /><br />
                <InputContainer>
                    <label htmlFor="description">Descrição da tag</label>
                    <Input type='text' id="description" value={description} 
                    onChange={(e) => setDescription(e.target.value)} required />
                </InputContainer>

                <br /><br />
                <AuthButton type="submit">SALVAR</AuthButton>&nbsp;&nbsp;
                <AuthButton onClick={() => setRedirect(true)} hollow className="hollow">VOLTAR</AuthButton>
                {redirect ? <Redirect to='/backoffice/tags' /> : null}

            </form>
        </Main>
    )

}

export default TagPatch