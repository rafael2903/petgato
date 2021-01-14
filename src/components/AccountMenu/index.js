import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Details } from './styles';


function AccountMenu( {loggedIn, setloggedIn, setId, setToken, setAdmin } ) {
    
    function logout() {
        localStorage.clear();
        setId('');
        setToken('');
        setloggedIn(false);
        setAdmin(false);
    }

    if(loggedIn) {
        return (
            <li>
                <Details>
                    <summary>Minha conta</summary>    
                    <ul>
                        <li><Link to='/backoffice/publications'>Backoffice</Link></li>
                        <li><Link to='/backoffice/profile'>Meu perfil</Link></li>
                        <li onClick={logout}><button>Sair da conta</button></li> 
                    </ul>
                </Details>
            </li>
        );

    } else {
        return <li><Link to='/login'>Entrar</Link></li>;
    }
}

export default AccountMenu;