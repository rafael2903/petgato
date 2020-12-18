import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Main from '../../../components/Main';
import TitlesContainer from '../../../components/TitlesContainer';
import Table from 'react-bootstrap/Table';
import AuthButton from '../../../components/AuthButton';

import  '../../../App.scss' ;

const Tags = () => {

    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:3000/tags", { headers: { Accept: '*/*'} })
        .then( res => setData(res.data) )
        .catch( err => {
            console.log(err)
        })
    },[])

    function handleDelete(id) {
        axios.delete('http://localhost:3000/tags/' + id)
        .then( res => {
            if (res.status === 204) {
                window.alert('Tag excluída com sucesso.');
                window.location.reload();
            }
        })
    }

    return (    
        <Main>
            <TitlesContainer>
                <h2>Backoffice</h2>
                <h1>Todas as tags</h1>
            </TitlesContainer>
            <Table striped hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>N de publicações</th>
                        <th colSpan="3" >Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map( row => {
                        return (
                            <tr>
                                <td>{row.id}</td>
                                <td>{ } 0 </td>
                                <td>{row.name}</td>
                                <td><Link to={{
                                    pathname: '/backoffice/tags/' + row.id,
                                    state: {
                                        id: row.id,
                                        name: row.name,
                                        description: row.description
                                    }
                                }}>
                                    Editar
                                </Link></td>
                                <td><button onClick={ () => handleDelete(row.id) }>Excluir</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Link to="/backoffice/tags/create">
                <AuthButton>
                    NOVA TAG
                </AuthButton>
            </Link>
        </Main>
    );
}
    
export default Tags;