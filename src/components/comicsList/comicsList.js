import { useState } from 'react';
import { useEffect } from 'react';
import MarvelServices from '../../services/MarvelServices';


import '../comicsList/comicsList.scss';


const ComicsList =()=>{
    const [data, setData]=useState([]),
          [offset, setOffset]=useState(1);
    const marvelService=new MarvelServices();
    
    useEffect(()=>{
        loadComics();
    },[])
    const loadComics=()=>{        
        marvelService.getComics(offset)
                     .then(result=>{
                         setData(data=>[...data,...result]);
                         setOffset(offset=>+offset+8);
                     })
                     .catch((e)=>{
                         console.log(e);
                     })
    }
    console.log(offset);
        const comics=!data?null: data.map(item=>{
            return(
                <div className="comics_item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h5>{item.title}</h5>
                    <span>{item.price>=0?`${item.price} $`:'Не доступно'}</span>
                </div>
            );
        })
        return (
            <div className="comics">
                {comics}
                <div className="load_more">
                    <button 
                        className='btn homepage btn_light center'
                        onClick={ loadComics }>Загрузить еще</button>

                </div>
            </div>
        )
 

}

export default ComicsList;