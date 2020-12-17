import styled from 'styled-components';

export const Input = styled.input`

    width: 100%;
    height: 3rem;
    border: 1px solid #c882b4;
    border-color: ${ (props) => props.error ? 'red' : '#c882b4' };
    font-size: 1.1rem;
    color: #c882b4;
    padding: 0 10px;
    position: relative;

    :focus {
        outline: none;
        border-width: 2px;
    }

    :disabled {
        background-color: #eee;
    }
`;