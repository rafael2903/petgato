import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Main from '../../../components/Main';
import TitlesContainer from '../../../components/TitlesContainer';
import Table from 'react-bootstrap/Table';

function Users( {token} ) {

    const [data, setData] = useState([]);
    const config = {
        headers: {
            Authorization: token
        }
    }

    useEffect( () => {
        axios.get("http://localhost:3000/users", config)
        .then( res => setData(res.data) );
    },[])

    function handleDelete(id) {
        axios.delete('http://localhost:3000/users/' + id, config)
        .then( res => {
            if (res.status === 204) {
                window.alert('Usuário excluído com sucesso.');
                window.location.reload();
            }
        })
    }

    function formatDate(date) {
        return date.split('T')[0].split('-').reverse().join('/');
    }

    return (    
        <Main>
            <TitlesContainer>
                <h2>Backoffice</h2>
                <h1>Usuários</h1>
            </TitlesContainer>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tipo de Usuário</th>
                        <th colSpan="3" >Data de Ingresso</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map( row => {
                        return (
                            <tr>
                                <td>{row.name}</td>
                                <td>{ row.is_admin ? 'Administrador' : 'Usuário' }</td>
                                <td className="join-date">{ formatDate(row.created_at) }</td>
                                <td><Link to={'users/' + row.id}>Editar</Link></td>
                                <td><button onClick={ () => handleDelete(row.id) }>Excluir</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Main>
    );
}

export default Users;
