import styled from "styled-components";

export const MensageContainer = styled.div`
    font-size: 0.8rem;
    color:  ${props => props.error ? 'red' : '#707070'};
    display: block;
    text-align: center;
    margin: 5px;

`