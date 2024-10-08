// import styled, {keyframes, StyleSheetManager} from 'styled-components';
// import isValidProp from '@emotion/is-prop-valid';
import React from 'react';
import style from './Aligner.module.css'
// export const Bluedot = styled.div`

// /*Spinner Style */
//   /* Blue dot*/
//   left: 18%;
//   right:0%;
//   top:90%;
//   bottom:0%; 
    
//     position:absolute;
//     height:20%;
//     width:100%;
//     background-color:blue;
//     border-radius:100px;
  
// `

// export const circleit = ( {d1,d2,d3}) =>keyframes`
//   1%{
//   transform: rotate(${d1+'deg'});
//   } 
//   25%{
//     transform: rotate(${d2+'deg'} );
//   }
//   100%{
//     transform: rotate(${d3+'deg'} );
//   } 
// `
// export const Align = styled.span`
// /*Spinner Keyframe Animations*/
// /*Spinner in the circle gets bigger yellowish*/
//   height: 40%;
//   width:6%;
//   background-color:yellow;
//    animation: ${props => circleit(props)} linear ${props => props.sec}s ;
// //   animation-name: ${(props) => circleit({props})};
// //  animation-duration: ${props => props.sec}s;
// //  animation-iteration-count: linear;
//   position:absolute;
//   left:50%;
//   right:0%;
//   top:30%;
//   bottom:0%;
//   z-index:1;
//   transform:rotate(${props => props.d4}deg);
// `

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
