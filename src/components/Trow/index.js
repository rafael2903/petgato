import axios from 'axios';
import { Link } from 'react-router-dom';

function Trow( {data, attributes, show = false, showRoute = '', edit = false, editRoute = '', destroy = false, destroyUrl = '',} ) {


    function handleDelete() {
        axios.delete(destroyUrl + data.id)
        .then( res => {
            if (res.status === 204) {
                window.alert('Excluído!');
                window.location.reload();
            }
        })
    }

    return (
        <tr>
            {attributes.map( attribute => {
                return <td>{data[attribute]}</td>
            })}
            {show ? <td><Link to={showRoute + data.id}>Exibir</Link></td> : null}
            {edit ? <td><Link to={editRoute + data.id}>Editar</Link></td> : null}
            {destroy ? <td><button onClick={handleDelete}>Excluir</button></td> : null}
        </tr>
    );
}

export default Trow;