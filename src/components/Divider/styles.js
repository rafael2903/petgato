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
        display: flex;
        background-color: #fbe9f6;
        align-items: center;
    }

    div.container main {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }  

    @media (max-width: 800px) {

        figure {
            display: none;
        }
        
        div.container {
            width: 100%;
        }
    }

`;