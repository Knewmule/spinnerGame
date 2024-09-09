import styled, {keyframes, StyleSheetManager} from 'styled-components';
import isValidProp from '@emotion/is-prop-valid';
import { useCallback,useState } from 'react';
export const Bluedot = styled.div`

/*Spinner Style */
  /* Blue dot*/
  left: 18%;
  right:0%;
  top:90%;
  bottom:0%; 
    
    position:absolute;
    height:20%;
    width:100%;
    background-color:blue;
    border-radius:100px;
  
`

export const circleit = ( {d1,d2,d3}) =>keyframes`
  1%{
  transform: rotate(${d1+'deg'});
  } 
  25%{
    transform: rotate(${d2+'deg'} );
  }
  100%{
    transform: rotate(${d3+'deg'} );
  } 
`
export const Align = styled.span`

/*Spinner Keyframe Animations*/

/*Spinner in the circle gets bigger yellowish*/

  height: 40%;
  width:6%;
  background-color:yellow;
   animation: ${props => circleit(props)} linear ${props => props.sec}s ;
//   animation-name: ${(props) => circleit({props})};
//  animation-duration: ${props => props.sec}s;
//  animation-iteration-count: linear;

  position:absolute;
  left:50%;
  right:0%;
  top:30%;
  bottom:0%;
  z-index:1;
  transform:rotate(${props => props.d4}deg);



`

export default function Aligner({d1,d2,d3,d4,sec,blueref}){
  
  
   
    return (
      <StyleSheetManager shouldForwardProp={(ansec) => isValidProp(ansec)}>

<Align  d1={d1}d2={d2}d3={d3}d4={d4}sec={sec} >
        <Bluedot ref={blueref} ></Bluedot>  
    </Align>
      </StyleSheetManager>
        
    );
};
