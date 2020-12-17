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

    background-color: #BA66A3;
    color: #FFFFFF;
    border: none;

    :hover{
        background-color: #c882b5;
    }

    :focus {
        outline: none;
    }

    ${props => props.hollow ? `
        background-color: #FFFFFF;
        color: #444143;
        border: 1px solid #BA66A3;
        
        :hover{
        background-color: #F7F7F7;
        }
        
        ` : '' };
`;