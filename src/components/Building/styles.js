import styled from 'styled-components';

export const Figure = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: 4rem;

    img {
        width: 40%;
        height: auto;
        min-width: 200px;
        margin-bottom: 2rem;
    }

    p {
        font-size: 1.5rem;
        font-weight: 400;
    }

`;