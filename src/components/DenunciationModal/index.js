import axios from 'axios';
import { useEffect, useState } from 'react'
import { useHistory, useParams} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import '../../App.scss';

function DenunciationModal(){

    const name = 'Rafael Rodrigues';
    const description = 'hfbhjf hf dhf hjh hfhsfs hfsfs fsklhjh hfsfh sfsh fsfhjhjhf hjfs hhhhhfk hf sfh hfs hhhufsh hurh huhfh hllhfjh hhfh h hfjh huf shu ksfhushf uh fhs uklshuh fhusi hfush h';

    const history = useHistory();
    const { id } = useParams();
    
    useEffect( () => {
        axios.get('http://localhost:3000/contacts/' + id)
        .then(response => response.data)
        .then( data => data)
    },[]);

    function handleIgnore() {
        history.goBack();
    }
    
    function handleDelete() {
        history.goBack();
        
    }

  return (
      <Modal show={true} onHide={() => history.goBack()} contentClassName='modal-border' centered>
        <Modal.Header closeButton>
          <Modal.Title>Comentário de {name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>"{description}"</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleIgnore}>
            Ignorar denúncia
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Apagar comentário
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default DenunciationModal;