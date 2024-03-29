import React, {useEffect, useState} from 'react'
import { useLocation, Redirect, Link } from 'react-router-dom';
import axios from 'axios';

import Main from '../../../components/Main';
import TitlesContainer from '../../../components/TitlesContainer';
import Input from '../../../components/Input';
import InputContainer from '../../../components/InputContainer';
import AuthButton from '../../../components/AuthButton';
import TagsContainer from '../../../components/TagsContainer';

import {modules, formats} from '../../../components/TextEditor';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostEdit = ({type}) => {

    const location = useLocation();

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const [redirect, setRedirect] = useState(false);

    useEffect( () => {
        if(type === 'edit' && location.state){
            setId(location.state.id);
            setName(location.state.name);
            setText(location.state.text);
        }
        axios.get('http://localhost:3000/tags', { headers: { Accept: '*/*'} })
        .then( res => {
            setTags(res.data);
        })
        .catch( err => {console.log(err); setRedirect(true) } )
    }, [type, location.state]);


    const toggleTag = (tag) => {
        let auxTags = selectedTags;
        if(auxTags.includes(tag)){
            auxTags = auxTags.filter( (value) => value !== tag);
        } else {
            auxTags.push(tag);
        }
        setSelectedTags(auxTags);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const image = new FormData();
        image.append('File', selectedFile);

        if(type === 'edit'){
            axios.put(`http://localhost:3000/posts/${id}`, {name, content: text, banner_image: selectedFile})
            .then( res => {
                if(res.status === 204){
                    window.alert("Publicação editada com sucesso!");
                }
                setRedirect(true);
            })
            .catch( err => {
                window.alert("Não foi possivel salvar\n" + err);
                setRedirect(true);
            })
        } else {
            axios.post(`http://localhost:3000/posts`, {name, content: text, banner_image: image})
            .then( res => {
                if(res.status === 201){
                    const postId = res.data.id;

                    selectedTags.forEach(tagId => {
                        axios.post(`http://localhost:3000/post_has_tags`, 
                        {post_id: postId, tag_id: tagId});
                    });
                    window.alert("Publicado com sucesso!");
                }
                setRedirect(true);
            })
            .catch( err => {
                window.alert("Não foi possivel criar\n" + err);
                setRedirect(true);
            })
        }
    }

    return(
        <Main>
            <TitlesContainer>
                <h2>Backoffice</h2>
                <h1>{type === 'create' ? 'Criar' : 'Editar'} Publicação</h1>
            </TitlesContainer>

            <br />
            <form onSubmit={handleSubmit}>
                <InputContainer>
                    <label htmlFor="name">Titulo da publicação</label>
                    <Input type='text' id="name" value={name} 
                    onChange={(e) => setName(e.target.value)} required />
                </InputContainer>
                <br />
                <InputContainer>
                    <ReactQuill theme="snow" modules={modules} formats={formats} 
                    value={text} onChange={(e) => setText(e.valueOf())} required />
                </InputContainer>

                <br /><br />
                <InputContainer>
                    <label htmlFor="imagem">Escolha uma imagem de capa:</label>
                    <input type='file' id="imagem" style={{marginTop:'10px' }}
                    onChange={ e => setSelectedFile(e.target.files[0]) } />
                </InputContainer>

                <br /><br />
                <InputContainer>
                    <label htmlFor="tags">Escolha pelo menos uma tag:</label>
                    <TagsContainer>
                        {tags.map( tag => 
                            <div>
                            <input type='checkbox' name={'tag:'+tag.name}
                            title={tag.name} onClick={() => {toggleTag(tag.id)}}
                            style={{marginLeft: '18px', marginRight: '3px'}} />
                            {tag.name}
                            </ div>
                        )}
                    </TagsContainer>
                </InputContainer>

            <Link to='/backoffice/tags'>
            <AuthButton hollow>GERENCIAR TAGS</AuthButton>
            </Link>
            <br /><br />
            
            <AuthButton type="submit">PUBLICAR</AuthButton> &nbsp;&nbsp;&nbsp;
            <AuthButton onClick={() => setRedirect(true)} hollow> VOLTAR</AuthButton>
            </form>
            {redirect ? <Redirect to='/backoffice/publications' /> : null}
            <br /><br />
        </Main>
    )
}

export default PostEdit;
