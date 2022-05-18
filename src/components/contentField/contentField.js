import React from 'react'; 
import { useState, useEffect, useRef } from 'react';

import '../contentField/contentField.scss';

import CharInfo from '../charInfo/charInfo';
import backImg from '../../resources/img/bc-main.png';
import MarvelServices from '../../services/MarvelServices';

const ContentField =(props)=>{
    const [data, setData]=useState([]),
            [char, setChar]=useState(props.char),
            [loading]=useState(false),
            [newCharLoading, setNewCharLoading]=useState(false),
            [offset, setOffset]=useState(210);
    const marvelServices=new MarvelServices();

    useEffect(()=>{
        loadChars();
    },[])
    
    const loadChars=(offset)=>{
        setNewCharLoading(true);

       marvelServices
            .getAllCharacters(offset)
            .then(newData=>{                
                setData(data=>[...data,...newData]);
                setOffset(offset=>offset+9);
                setNewCharLoading(false);
            });
    }
    let charRef=useRef();
    function onUpdateChar(e){
        if (charRef.current){
            charRef.current.classList.remove('active_char');
        }
        charRef.current=e.currentTarget;
        charRef.current.classList.add('active_char');
        const char=e.currentTarget.getAttribute('data-id');
        if (char){
            setChar(char);
        }
        window.scrollTo(0,0);
    }
    // const setRef=elem=>{
    //     charRef=elem;
    // }
  
        //const {data}=this.state;
        
        const content=data.map(item=>{
            return (
                <div className="content-field_content_item" 
                        key={item.id}
                        data-id={item.id}
                        onClick={e=>onUpdateChar(e)}
                        >
                    <div className="content-field_content_item_wrapper">
                            <img src={item.thumbnail} alt={item.name} />
                        </div>
                    <h2>{item.name}</h2>
                    {/* <span>{item.description}</span> */}
                </div>
            )
            })

        //const {char, loading, newCharLoading, offset}=this.state;
        return(
            <div className="content-field">
                <div className="content-field_content">
                    {content}
                    <button 
                        className='btn homepage btn_light center'
                        disabled={newCharLoading}
                        onClick={()=>loadChars(offset)}>
                        <div>загрузить еще</div>
                    </button>
                </div>
                <div className="content-field-descr">
                    <CharInfo data={null} 
                              char={char} 
                              loading={loading}/>
                    <img src={backImg} alt="background" className='content-field_back' />
                </div>
    
            </div>
        );

}
export default ContentField;