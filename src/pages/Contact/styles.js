import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

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
        resize: none;

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

    form {
        width: 68%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(3,1fr);
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

        padding-bottom: 0;
        font-weight: 500;
    }
`;