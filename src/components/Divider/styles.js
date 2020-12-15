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
        object-fit: cover;
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
        width: 100%;
        max-width: 21rem;

    }  

    form {
        width: 100%;
        display: flex; 
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 900px) {

        figure {
            display: none;
        }
        
        div.container {
            width: 100%;
        }
    }

    @media (max-width:400px) {
        
        div.container main {
            margin: 0 1.5rem;
        }
    }



`;