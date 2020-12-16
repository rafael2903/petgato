import { MensageContainer } from './styles';

function InputMessage( {error = null, children} ) {
    return (
        <MensageContainer error={error}>{children}</MensageContainer>
    );
}

export default InputMessage;