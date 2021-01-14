import styled from 'styled-components';

export const Details = styled.details`
    cursor: pointer;
    position: relative;

    & > summary {
        list-style: none;
    }

    & > summary::-webkit-details-marker {
        display: none;
    }

    ul {
        position: absolute;
        background-color: white;
        border-radius: 5px;
        border: solid 1px lightgray;
        top: 110%;
        right: -2px; 
        z-index: 10;
    }

    ul li {
        color: #BA66A3;
        font-weight: 500;
    }
    
    ul li a, ul li button{
        display: block;
        padding: 6px 0;
        color: #BA66A3;
    }

    @media (max-width: 1165px) {
        position: static;

        & > summary {
            list-style: unset;
        }
        
        & > summary::-webkit-details-marker {
            display: unset;
        }
        
        ul {
            position: static;
            background-color: #BA66A3;
            border: unset;
        }
        
        ul li a, ul li button {
            font-size: 1.2rem;
            font-weight: 300;
            padding: 1rem 0;
            color: white;
        }

    }

`;
