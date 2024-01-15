import {styled} from 'styled-components';

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

export const Align = styled.span`

/*Spinner in the circle gets bigger yellowish*/

  height: 40%;
  width:6%;
  background-color:yellow;
  animation: circleit linear {${addit()}} ;


  position:absolute;
  left:50%;
  right:0%;
  top:30%;
  bottom:0%;
  z-index:1;
  transform:rotate(160deg);


/*Spinner Keyframe Animations*/
@keyframes circleit {
  1% {
  transform: rotate(10deg);
  } 
  25% {
    transform: rotate(230deg);
  }
  100%{
    transform: rotate(450deg);
  } 
}
`

export default function Aligner({addsec}){
  function addit(){
    return addsec;
  }
    return (
        <Align >
            <Bluedot />
        </Align>
    )
}
