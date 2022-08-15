import ErrorMessage from '../errorMessage/errorMessage';
import { Link } from 'react-router-dom';
import './page404.scss';

const Page404=()=>{
    return(
        <div className='page404'>
            <ErrorMessage/>
            <p>Нет такой страницы!</p>
            <Link to={'/'}> Вперед на главную</Link>
        </div>
    )
}

export default Page404;