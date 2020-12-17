import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Main from '../../../components/Main';
import TitlesContainer from '../../../components/TitlesContainer';
import Table from 'react-bootstrap/Table';

import  '../../../App.scss' ;

function Contacts() {

    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:3000/contacts")
        .then( res => setData(res.data) );
    },[])

    function handleDelete(id) {
        axios.delete('http://localhost:3000/contacts/' + id)
        .then( res => {
            if (res.status === 204) {
                window.alert('Mensagem excluída com sucesso.');
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
                <h1>Mensagens de Contato</h1>
            </TitlesContainer>
            <Table striped hover responsive>
                <thead>
                    <tr>
                        <th>Remetente</th>
                        <th>Descrição</th>
                        <th colSpan="3" >Data de Envio</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map( row => {
                        return (
                            <tr>
                                <td>{row.name}</td>
                                <td>"{ row.description.slice(0,45) }..."</td>
                                <td className="date">{ formatDate(row.created_at) }</td>
                                <td><Link to={'contacts/' + row.id}>Exibir</Link></td>
                                <td><button onClick={ () => handleDelete(row.id) }>Excluir</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Main>
    );
}
    
export default Contacts;


