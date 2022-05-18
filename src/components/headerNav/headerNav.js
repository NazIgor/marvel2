import { NavLink } from 'react-router-dom';

import './headerNav.scss';

const HeaderNav=()=>{
    const clasLink='navigate-link';

    return(
        <ul className="navigate">
            <li>
                <NavLink to="/" className={clasLink}>Персонажи</NavLink>
            </li>
            <li>
                <NavLink to="/comics" className={clasLink+ ` divider'}`}>  Комиксы</NavLink>
            </li>
        </ul>
    )
}

export default HeaderNav;