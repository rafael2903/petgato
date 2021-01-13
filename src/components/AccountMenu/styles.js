import styled from 'styled-components';

export const Wrapper = styled.li`
    cursor: pointer;
    position: relative;

    ul {
        display: none;
        position: absolute;
        background-color: white;
        border-radius: 5px;
        border: solid 1px lightgray;
        right: 0; 
        z-index: 10
    }

    &:hover ul, &:active ul {
        display: block;
    }

    ul li {
        color: #BA66A3;
        font-weight: 500;
    }
    
    ul li span:hover {
        opacity: 0.85;
    }
    
    ul li a{
        display: block;
        padding: 6px 0;
        color: #BA66A3;
    }
`;
