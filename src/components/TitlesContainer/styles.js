import styled from 'styled-components';

export const TitlesContainer = styled.div`

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

    @media(max-width: 750px) {

        h1 {
            font-size: 1.7rem;
        }

        h2 {
            margin-bottom: 0.4rem;
            font-size: 1.2rem;
        }
    }

`;