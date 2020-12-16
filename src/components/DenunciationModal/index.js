import { useState } from 'react'
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import '../../App.scss';
import { Paragraph } from './styles';

function ContactModal( ){

    const [data, setData] = useState({});

    const history = useHistory();
    const { id } = useParams();
    
    useEffect( () => {
        axios.get('http://localhost:3000/contacts/' + id)
        .then(response => response.data)
        .then(data => setData(data));
    },[]);
        
    function handleIgnore() {
        history.goBack();
    }
    
    function handleDelete() {
        history.goBack();
        
    }

  return (
    <>
      <Modal show={true} onHide={() => history.goBack()} contentClassName='modal-border' centered>
        <Modal.Header closeButton>
          <Modal.Title>Mensagem: {data.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Paragraph><span className='bold'>Email: </span>{data.email}</Paragraph>
            <Paragraph><span className='bold block'>Mensagem: </span>"{data.description}"</Paragraph>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactModal;