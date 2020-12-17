import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Icon, Menu } from './styles';
import logo from '../../assets/gatinho_petgato_branco.svg';

const Navbar = ( {loggedIn, id, admin} ) => {

    const location = useLocation();

    return(
        <Container>
            <Link to='/' >
                <Icon src={logo}/>
            </Link>
            <Menu>
                <li className={ location.pathname === '/' ? "active" : ""}>
                    <Link to='/' >
                        Página inicial
                    </Link>
                </li>
                { admin ? 
                <>
                <li className={ location.pathname === '/backoffice/publications' ? "active" : ""}>
                    <Link to='/backoffice/publications'>
                        Publicações
                    </Link>
                </li>
                <li className={ location.pathname === '/backoffice/users' ? "active" : ""}>
                <Link to='/backoffice/users'>
                    Usuários
                </Link>
                </li>
                <li className={ location.pathname === '/backoffice/denunciations' ? "active" : ""}>
                <Link to='/backoffice/denunciations'>
                    Denúncias
                </Link>
                </li>
                <li className={ location.pathname === '/backoffice/contacts' ? "active" : ""}>
                <Link to='/backoffice/contacts'>
                    Mensagens
                </Link>
                </li>
                </>
                :
                <>
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
                </>
                }
            </Menu>
        </Container>
    )
}

export default Navbar;