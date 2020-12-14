import { MensageContainer } from './styles';

function InputMessage( {error, children} ) {
    return (
        <MensageContainer error={error}>{children}</MensageContainer>
    );
}

export default InputMessage;