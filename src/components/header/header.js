import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header=()=>{
    const clasLink='navigate-link';
    return (
        <>    
            <header className='header'>
                <h1>Вселенная <span className='marvel'>Marvel</span></h1>
                <ul className="navigate">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive })=> clasLink+ (isActive? ' navigate-link_active':'')}>
                            Персонажи </NavLink>
                    </li>
                      
                    <li>
                        <NavLink 
                            to="/comics" 
                            className={({ isActive })=> clasLink+ (isActive? ' navigate-link_active':'')}>
                            Комиксы </NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header;