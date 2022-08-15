import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MarvelServices from '../../services/MarvelServices';


import '../comicsList/comicsList.scss';


const ComicsList =()=>{
    const [data, setData]=useState([]),
          [offset, setOffset]=useState(1),
          [loading, setLoading]=useState(false);
    const marvelService=new MarvelServices();
    
    useEffect(()=>{
        loadComics();
        // eslint-disable-next-line
    },[])
    const loadComics=()=>{      
        setLoading(true);
        marvelService.getComics(offset)
                     .then(result=>{
                         setData(data=>[...data,...result]);
                         setOffset(offset=>+offset+8);
                         setLoading(false);
                     })
                     .catch((e)=>{
                         console.log(e);
                     })
    }
        const comics=!data?null: data.map((item,i)=>{
            return(
                                  
                    <div className="comics_item" key={`${item.id}-${i}`}>
                        <Link to={`/comic/${item.id}`}>  
                            <img src={item.image} alt={item.name} />
                            <h5>{item.title}</h5>
                            <span>{item.price>=0?`${item.price} $`:'Не доступно'}</span>
                        </Link>
                        
                    </div>
                
            );
        })
        const classBtn=!loading?'load_more': 'load_more load';
        return (
            <div className="comics">
                {comics}
                <div className={classBtn}>
                    <button 
                        className='btn homepage btn_light center'
                        onClick={loadComics}>Загрузить еще</button>
                </div>
            </div>
        )
 

}

export default ComicsList;