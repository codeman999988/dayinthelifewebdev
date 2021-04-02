import React from 'react';
import {Link} from 'react-router-dom';
import '../Header/Header.scss';

function Header() {
    return (
        <div className='header'>
            <Link to='/' >HOME</Link>
            <Link to='/start' >RESTART ADVENTURE</Link>
            <Link to='/' >QUIT!!!</Link>
            <Link to='/about' >About Us</Link>            
        </div>
    )
}
export default Header;