import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Icon, Menu } from './styles';
import logo from '../../assets/gatinho_petgato_branco.svg';
import AccountMenu from '../AccountMenu';

const Navbar = ( {loggedIn, admin, setloggedIn, setId, setToken, setAdmin } ) => {

    const location = useLocation();
    const pathname = location.pathname;
    const onBackoffice = pathname.includes('backoffice');
    const [showMenu, setShowMenu] = useState(false);

    return(
        <Container showMenu={showMenu}>
            <Link to='/' >
                <Icon src={logo}/>
            </Link>

            <button className='menu-icon' onClick={ () => setShowMenu(prev => !prev) }>
                <span></span>
                <span></span>
                <span></span>
                <span className='sr-only'>Menu de navegação</span>
            </button>
            
            <Menu showMenu={showMenu}>
                <li className={ pathname === '/' && "active"}>
                    <Link to='/' >
                        Página inicial
                    </Link>
                </li>
                { admin && onBackoffice ? 
                <>
                    <li className={ pathname === '/backoffice/publications' && "active"}>
                        <Link to='/backoffice/publications'>
                            Publicações
                        </Link>
                    </li>
                    <li className={ pathname === '/backoffice/users' && "active"}>
                        <Link to='/backoffice/users'>
                            Usuários
                        </Link>
                    </li>
                    <li className={ pathname === '/backoffice/denunciations' && "active"}>
                        <Link to='/backoffice/denunciations'>
                            Denúncias
                        </Link>
                    </li>
                    <li className={ pathname === '/backoffice/contacts' && "active"}>
                        <Link to='/backoffice/contacts'>
                            Mensagens
                        </Link>
                    </li>
                </>
                :
                <>
                    <li className={ pathname === '/about' && "active"}>
                        <Link to='/about'>
                            Sobre Nós
                        </Link>
                    </li>
                    <li className={ pathname === '/contact' && "active"}>
                        <Link to='/contact'>
                            Fale Conosco
                        </Link>
                    </li>
                    <AccountMenu loggedIn={loggedIn} setloggedIn={setloggedIn} setId={setId} setToken={setToken} setAdmin={setAdmin}/>
                </>
                }
            </Menu>
        </Container>
    )
}

export default Navbar;