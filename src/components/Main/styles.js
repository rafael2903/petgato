import styled from 'styled-components';

export const Main = styled.main`
    width: 90%;
    max-width: 1500px;
    margin: 0 auto;
    position: relative;

    flex-grow: ${ props => props.centered ? 0 : 1};
`;