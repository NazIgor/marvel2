import React, { useState, useEffect } from 'react';
import MarvelServices from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';


import '../../components/charInfo/charInfo.scss';
import { Link } from 'react-router-dom';

 const CharInfo =(props)=>{
    const [data, setData]=useState(props.data),
          //[char, setChar]=useState(props.char),
          [loading, setLoading]=useState(false);
    const marvelServices=new MarvelServices();

    const getComics=(data)=>{
        if (data.length>0){
            const comics=data.map((item,i)=>{
                return(
                    <Link to={`/comic/${item.resourceURI.slice(43)}`}
                        key={'comics'+i}>
                       <div className="char_total_comics_item">
                            {item.name}
                        </div> 
                    </Link>
                )
            })
            return (
                <div className="comics_header">
                    <h5>Comics:</h5>
                    {comics}
                </div>
                );
        }
        return null;

    }
    useEffect(()=>{

        if (props.char!==null){
            setLoading(true);
            marvelServices
                .getCharacter(props.char)
                .then(data=>{
                    setLoading(false);
                    setData(data);
                    });
        }
        // eslint-disable-next-line
    },[props.char])

    function contentChar() {        
        return(
            <>
                    <div className="char_total">
                        <div className="char_total_about">
                            <div className='img_wrapper'>
                            <img src={data.thumbnail} alt="data.name" />
                            </div>
                            <div>
                                <h2>{data.name}</h2>
                                <div className="btn_wrapper">
                                    <button className='btn homepage btn_light'>персонаж</button>
                                    <button className='btn wiki'>wiki</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="char_total_about_desciption">
                                {data.description}
                            </div>
                        <div className="char_total_comics">
                            {getComics(data.comics)}
                        </div>
                    </div>
                </>
        )
    }
    function contentSkeleton (){
        return(
            <>
                <div className="char_empty">
                    <h4>Пожалуйста выберите персонажа</h4>
                    <div className='wrapper'>
                        <div className="char_empty_circle"></div>
                        <div className="char_empty_square1"></div>
                    </div>
                    <div className="char_empty_square"></div>
                    <div className="char_empty_square"></div>
                    <div className="char_empty_square"></div>
                </div>
            </>
        )
    }

        const contentCharInfo=data && !loading ? contentChar():null;
        const contentSkeletonInfo=!data && !loading ? contentSkeleton():null;
        const spinner=loading? <div className="spiner_wraper"><Spinner/></div>: null;
        return(
            <div className="char-info">
                {contentCharInfo}
                {contentSkeletonInfo}
                {spinner}
            </div>
        );
    
}

export default CharInfo;