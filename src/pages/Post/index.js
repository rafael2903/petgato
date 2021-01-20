import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Post = () => {

    const {id} = useParams();

    const [data, setData] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:3000/posts/${id}`, {headers: {Accept : '*/*'} })
            .then( res => setData(res.data) )
            .catch( e => window.alert(e))
        console.log(data);
    }, [id] )

    return( 
        <div>
            {console.log(data)}
            <p>
            id: {data.id}
            </p>
            <p>
            name: {data.name}
            </p>
            { data.content ?
            <div dangerouslySetInnerHTML={{__html: data.content.body}}></div> : 
            <div>Não foi possível carregar a publicação :(</div> }
        </div>
    )
}

export default Post