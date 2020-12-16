import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Icon, Menu } from './styles';
import logo from '../../assets/gatinho_petgato_branco.svg';

const Navbar = ( {loggedIn, id} ) => {

    const location = useLocation();

    return(
        <Container>
            <Icon src={logo}/>
            <Menu>
                <li className={ location.pathname === '/' ? "active" : ""}>
                    <Link to='/' >
                        Página inicial
                    </Link>
                </li>
                <li className={ location.pathname === '/about' ? "active" : ""}>
                    <Link to='/about'>
                        Sobre Nós
                    </Link>
                </li>
                <li className={ location.pathname === '/contact' ? "active" : ""}>
                    <Link to='/contact'>
                        Fale Conosco
                    </Link>
                </li>
                <li>
                {loggedIn ?
                    <Link to={'/user' + id}>Minha Conta</Link> :
                    <Link to='/login'>Entrar</Link>
                }
                </li>
            </Menu>
        </Container>
    )
}

export default Navbar;