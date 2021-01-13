import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 90px;
    background-color: #BA66A3;
    box-shadow: 0px 0px 8px 2px #888888;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    .menu-icon .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
    
    @media (max-width: 1165px) {
    
        
        .menu-icon {
            height: 22px;
            width: 30px; 
            display: flex;
            align-items: center;
            justify-items: center;
            justify-content: center;
            align-content: center;
            z-index: 9;
            position: relative;
            margin-right: 15px;
        }

        .menu-icon span {
            position: absolute;
            display: block;
            height: 5px;
            width: 100%;
            border-radius: 30px;
            background: #ffffff;
            transition: 0.25s ease-in-out;
        }

        span:nth-child(1){
            top: 0;
        }
      
        span:nth-child(2){
            top: 8px;
        }
        
        span:nth-child(3){
            top: 16px;
        }
    }
`;

export const Icon = styled.img`
    height: 60px;
    margin: 0px 40px;
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #FFFFFF;
    margin-right: 50px;

    li{
        font-size: 1.4rem;
        margin: 0px 20px;
        list-style: none;
        font-weight: 300;
    }

    a{
        text-decoration: none;
        color: #FFFFFF;
    }

    a:hover{
        opacity: 0.85;
    }

    .active{
        font-weight: 500;
    }

    button {
        color: white;
    }

    @media (max-width: 1165px) {
        display: ${ props => props.showMenu ? 'flex' : 'none'};
    }

`;