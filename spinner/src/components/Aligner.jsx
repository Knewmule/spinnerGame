
import React from 'react';
import style from './Aligner.module.css'

export default function Aligner({d1,d2,d3,d4,sec,blueref}){
  const  circleit = ({d1,d2,d3})=>{
    const one = {
      keyframes:{
        "1%":{
        transform: `rotate(${d1+'deg'})`
      },
      "25%":{
        transform: `rotate(${d2+'deg'})`
      },
      "100%":{
        transform: `rotate(${d3+'deg'})`
      }
      }
    }
    return one;
  }
    const animation ={
      animation:`${circleit({d1,d2,d3})} linear ${sec}s`
    }
    const transform ={
      transform:`rotate(${d4}deg)`
    }
    
  
   
    return (
   
    <span style={animation &&transform} className={style.align}>
      <div ref={blueref} className={style.bluedot}>
      </div>
    </span>
   
        
    );
};
