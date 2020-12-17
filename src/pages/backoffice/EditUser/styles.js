import styled from 'styled-components';

export const Section = styled.section`

    form {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: 4rem 4rem 4rem;
        gap: 20px;
        margin-bottom: 2rem;
    }        

    form div:nth-child(1) {
        grid-column-start: 1;
        grid-row-start: 1;
        grid-column-end: 1;
        grid-row-end: 1;
    }
    
    form div:nth-child(2) {
        grid-column-start: 2;
        grid-row-start: 1;
        grid-column-end: 2;
        grid-row-end: 1;
    }
    form div:nth-child(3) {
        grid-column-start: 1;
        grid-row-start: 2;
        grid-column-end: 1;
        grid-row-end: 2;
    }
    
    form div:nth-child(4) {
        grid-column-start: 2;
        grid-row-start: 2;
        grid-column-end: 2;
        grid-row-end: 2;
    }
    form div:nth-child(5) {
        grid-column-start: 1;
        grid-row-start: 3;
        grid-column-end: 1;
        grid-row-end: 3;
    }

    select {
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
    }

    .buttons {
        width: 100%;
    }

    button {
        margin-right: 1rem;
    }

    .sendButton {
        position: relative;
    }

    .sendButton::after {
        content: 'Dados atualizados com sucesso!';
        display: ${ props => props.send ? 'inline-block' : 'none' };
        color: green;
        font-size: 0.9rem;
        font-weight: 400;
        position: absolute;
        left: 100%;
        top: 0px;
        text-align: start;
        width: 200px;
        height: auto;
        margin-left: 10px;
    }

    @media(max-width: 750px) {

    form {
        display: flex;
        align-items: start;
        flex-direction: column;
    }

    & {
        margin: 1.7rem 0;
    }

    .buttons {
        display: flex;
        justify-content: space-around;
        margin-bottom: 3rem;
    }

    button {
        margin: 0;
        width: 45%;
    }

    .sendButton::after {
        left: 0;
        top: 100%;
        text-align: center;
        margin: 10px 0 0 0;
    }
`;