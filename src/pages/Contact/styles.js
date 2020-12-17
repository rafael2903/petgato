import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.2rem 0;

    .image-container {
        width: 28%;
        height: auto;
        display: inline-block;
        margin-right: 1.3rem;
    }

    img {
        width: 100%;
    }

    textarea {
        border: 1px solid #c882b4;
        font-size: 1.1rem;
        color: #c882b4;
        padding: 10px;
        width: 100%;
        height: 100%;
        resize: vertical;
        min-height: 11rem;
        max-height: 25rem;
        color: grey;

        :focus {
            outline: none;
            border-width: 2px;
        }
    }

    .input-container {
        width: 100%;
        padding-bottom: 0;
        font-weight: 500;
    }

    input {
        grid-column-start: 1;
        grid-row-start: 1;
        width: 100%;
        margin-bottom: 0.7rem;
        color: grey;
    }

    section {
        width: 68%;
    }

    form {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: 4rem 1fr 1fr auto;
        gap: 20px;
        margin-bottom: 2rem;
    }

    .text-container {
        grid-column-start: 1;
        grid-row-start: 2;
        grid-column-end: 3;
        grid-row-end: 4;

        width: 100%;
        margin-bottom: 0.7rem;
        padding-bottom: 0;
        font-weight: 500;
    }

    .sendButton {
        grid-column-start: 2;
        grid-row-start: 4;
        grid-column-end: 2;
        grid-row-end: 4;
        height: 3.0rem;
        width: 7.2rem;
        align-items: center;
        margin: 0 0 0 auto;
        position: relative;
    }

    .sendButton::after {
        content: 'Mensagem enviada com sucesso!';
        display: ${ props => props.send ? 'inline-block' : 'none' };
        color: green;
        font-size: 0.9rem;
        font-weight: 400;
        position: absolute;
        right: 100%;
        top: 0px;
        text-align: end;
        width: 200px;
        height: auto;
        margin-right: 10px;
    }

    @media(max-width: 1000px) {

        .image-container {
            display: none;
        }

        section {
            width: 100%;
        }
    }

    @media(max-width: 750px) {

        form {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        & {
            margin: 1.7rem 0;
        }
    }
`;