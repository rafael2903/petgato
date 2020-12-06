import PropTypes from 'prop-types';
import { Container } from './styles';

function Divider( {src,children} ){

    return (
        <Container>
            <figure>
                <img className="backgroundImage" src={src} alt='imagem de plano de fundo' />    
            </figure>
            <div className="container">
                {children}
            </div>
        </Container> 
    );
}

Divider.propTypes = {
    src: PropTypes.string,
    children: PropTypes.element,
};

export default Divider