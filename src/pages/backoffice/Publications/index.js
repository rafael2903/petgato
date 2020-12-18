import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Main from '../../../components/Main';
import TitlesContainer from '../../../components/TitlesContainer';
import Table from 'react-bootstrap/Table';
import AuthButton from '../../../components/AuthButton';


function Publications() {

    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:3000/posts", {headers: {Accept : '*/*'} })
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

    function formatDate(date) {
        return date.split('T')[0].split('-').reverse().join('/');
    }

    function formatTags(tags) {
        return tags.map( (tag) => [tag.name]).join(', ').slice(0,40);
    }

    return (    
        <Main>
            <TitlesContainer>
                <h2>Backoffice</h2>
                <h1>Todas as Publicações</h1>
            </TitlesContainer>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th className='number'>#</th>
                        <th>Data</th>
                        <th>Título</th>
                        <th colSpan="3">Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map( row => {
                        return (
                            <tr>
                                <td className="number">{row.id}</td>
                                <td className="date">{ formatDate(row.created_at) }</td>
                                <td className='title'>{ row.name.slice(0,40) }...</td>
                                <td>{ formatTags(row.tags) }...</td>
                                <td><Link to={'publications/edit/' + row.id}>Exibir</Link></td>
                                <td><button onClick={ () => handleDelete(row.id) }>Excluir</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <AuthButton hollow style={{marginBottom: '3rem'}}><Link to='publications/create'>nova publicação</Link></AuthButton>
        </Main>
    );
}
    
export default Publications;
