import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;

    figure {
        width: 50%;
        height: 100%;
        overflow: hidden;
        display: inline-block;
        display: flex;
        align-items: center;
    }

    img.backgroundImage {
        height: 100%;
        width: 100%;
        display: inline-block;
    }

    div.container {
        width: 50%;
        height: 100vh;
        display: inline-block;
        background-color: #fbe9f6;
    }  

`;