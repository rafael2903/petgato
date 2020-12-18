import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Main from '../../../components/Main';
import TitlesContainer from '../../../components/TitlesContainer';
import Table from 'react-bootstrap/Table';
import AuthButton from '../../../components/AuthButton';

import  '../../../App.scss' ;

const Publications = () => {

    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:3000/posts")
        .then( res => setData(res.data) );
    },[])

    function handleDelete(id) {
        axios.delete('http://localhost:3000/posts/' + id)
        .then( res => {
            if (res.status === 204) {
                window.alert('Publicação excluída com sucesso.');
                window.location.reload();
            }
        })
    }

    return (    
        <></>
    );
}
    
export default Publications;
