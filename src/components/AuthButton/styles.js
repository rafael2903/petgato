import styled from 'styled-components';

export const AuthButton = styled.button`
    border-radius: 5px;
    padding: 0.7rem 1.3rem;
    font-size: 1.2rem;
    font-weight: 300;
    width: fit-content;
    cursor: pointer;
    margin-top: 0.5rem;
    margin-bottom: 0.7rem;
    text-transform: uppercase;

    background-color: ${props => props.hollow ? '#fff' : '#ba66a3' };
    color: ${props => props.hollow ? '#444143' : '#fff' };;
    border: ${props => props.hollow ? '1px solid #BA66A3' : 'none' };

    :hover{
        background-color: ${props => props.hollow ? '#f7f7f7' : '#c882b5' };
    }

    :focus {
        outline: none;
    }

`;