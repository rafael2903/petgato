import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';


function AccountMenu( {loggedIn, setloggedIn, setId, setToken, setAdmin } ) {
    
    const [show, setShow] = useState(false);

    function logout() {
        localStorage.clear();
        setId('');
        setToken('');
        setloggedIn(false);
        setAdmin(false);
    }

    if(loggedIn) {
        return (
            <Wrapper show={show} onClick={ () => setShow(prev => !prev)}> 
            Minha conta
                <ul>
                    <li><Link to='/backoffice/publications'>Backoffice</Link></li>
                    <li><Link to='/backoffice/profile'>Meu perfil</Link></li>
                    <li onClick={logout}><span>Sair da conta</span></li> 
                </ul>
            </Wrapper>
        );

    } else {
        return <li><Link to='/login'>Entrar</Link></li>;
    }
}

export default AccountMenu;