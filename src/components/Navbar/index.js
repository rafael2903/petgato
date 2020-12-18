import { Link, useLocation } from 'react-router-dom';
import { Container, Icon, Menu } from './styles';
import logo from '../../assets/gatinho_petgato_branco.svg';

const Navbar = ( {loggedIn, admin, setloggedIn, setId, setToken, setAdmin } ) => {

    const location = useLocation();

    function logout() {

        setloggedIn(false)
        localStorage.removeItem('loggedIn');

        setId('');
        localStorage.removeItem('id');
        
        setToken('');
        localStorage.removeItem('token');

        setAdmin(false);
        localStorage.removeItem('admin');
    }

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
                </>
                }
                    <li>
                        {loggedIn ? <Link to='' onClick={logout}>Sair</Link> : <Link to='/login'>Entrar</Link>}
                    </li>
            </Menu>
        </Container>
    )
}

export default Navbar;