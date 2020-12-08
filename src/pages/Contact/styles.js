import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.3rem 0;

    .image-container {
        width: 28%;
        height: auto;
        display: inline-block;
        margin-right: 1.3rem;
    }

    img {
        width: 100%;
    }

    h2 {
        font-weight: 300;
        text-transform: uppercase;
        font-size: 1.3rem;
    }

    h1 {
        color: #c882b4;
        font-size: 1.9rem;
        margin-bottom: 1rem;
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
    }

    form::nth-child(1) {
        grid-column-start: 1;
        grid-row-start: 1;
        grid-column-end: 1;
        grid-row-end: 1;
    }
    
    form::nth-child(2) {
        grid-column-start: 2;
        grid-row-start: 1;
        grid-column-end: 2;
        grid-row-end: 1;
    }

    .text-container {
        grid-column-start: 1;
        grid-row-start: 2;
        grid-column-end: 3;
        grid-row-end: 4;

        margin-top: 0.5rem;
        padding-bottom: 0;
        font-weight: 500;
    }

    button {
        grid-column-start: 2;
        grid-row-start: 4;
        grid-column-end: 2;
        grid-row-end: 4;
        height: 3.0rem;
        width: 6.2rem;
        align-items: center;
        margin: 0 0 0 auto;
    }
`;