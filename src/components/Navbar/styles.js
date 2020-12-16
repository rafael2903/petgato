import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 90px;
    background-color: #BA66A3;
    box-shadow: 0px 0px 8px 2px #888888;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled.img`
    height: 60%;
    margin: 0px 40px;
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #FFFFFF;
    margin: 0px 70px;

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
`;