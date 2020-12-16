import { useEffect, useState } from 'react';
import Table from '../../../components/Table';
import axios from 'axios';
import Main from '../../../components/Main';


function Contacts() {

    const [content, setContent] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:3000/contacts")
        .then( res => {
            setContent(res.data);
        });
    },[])

    return (
        <Main>
            <Table content={content} headers={ ['Remetente', 'Descrição', 'Data de Envio'] } 
            attributes={ ['name', 'description', 'created_at']} show showRoute = 'contacts/' edit editRoute = 'users/edit/' destroy destroyUrl = 'http://localhost:3000/contacts/'/>
        </Main>
    );
}


    
export default Contacts;


