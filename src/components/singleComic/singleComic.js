

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarvelServices from '../../services/MarvelServices';
import './singleComic.scss';

const SingleComic=(props)=>{
    const {comicId}=useParams(),
          marvelService=new MarvelServices(),
          [data, setComicInfo]=useState(null);

    useEffect(()=>{
        loadData();
        // eslint-disable-next-line
    },[comicId]);

    const loadData=()=>{
        marvelService.getComic(comicId)
                    .then(data=>{ 
                        console.log(data);
                        setComicInfo([...data]);
                    });

    }
    
    return(
        <div className="single-comic">
            {data? <View comic={data}/>: null}
        </div>
    )
}
const View=({comic})=>{

    return (
        <>
            <div className="img_container">
                <img src={comic[0].image} alt={comic[0].title} />
            </div>
            <div className="descr">
                <h2>{comic[0].title}</h2>
                <h4>Description:</h4>
                <p>{comic[0].description}</p>
                <h4>Price:</h4>
                <span>$ {comic[0].price}</span>
            </div>
        </>
    )
}

export default SingleComic;