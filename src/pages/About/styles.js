import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


export const ImagesContainer = styled.aside`

    width: 30%;
    height: 400px;

    figure {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 1rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.3rem;
    }

    .cintia {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 1;
    }

    .mandragora {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 2;
        grid-row-end: 2;
    }

    .floquinho {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 2;
    }     

    @media (max-width: 1100px) {

        .cintia {
            grid-row-end: 3;
        }
        
        .mandragora, .floquinho {
            display: none;
        }
    }

    @media (max-width: 800px) {
            display: none;
    }   
`;

export const TextContainer = styled.section`

    width: 60%;

    p {
        margin-bottom: 1rem;
        color: #666;
    }

    .social-medias {
        width: fit-content;
        margin-bottom: 2rem;

        svg {
            margin-right: 1rem;
        }
    }

    
    @media (max-width: 800px) {

        width: 100%
    }
`;