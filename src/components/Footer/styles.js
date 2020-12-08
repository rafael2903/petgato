import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    height: 4rem;
    background-color: #c882b4;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        margin: 0 1rem;
    }

    a {
        color: white;
    }

    @media (max-width: 600px) {

        & {
            font-size: 0.8rem;
        }
    }
`;