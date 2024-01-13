import { styled } from "styled-components";
import Circlefucks from "../Circlefucks/Circlefucks";
import { useState } from "react";
const Container = styled.div`


    display: flex;
    justify-content: center;
    height: 500px;
    border: 1px solid #000000;

  
`
const Circle = styled.div`
/*Green Circle Container & Style*/

      display:inline;
      position:relative;
      border: 5px solid #ff0000;
      background-color: #00ff00;
      width: 200px;
      height: 200px;
      border-radius: 400px; 
      margin: 0.5em;


`
const Bluedot = styled.div`

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

const Aligner = styled.span`

/*Spinner in the circle gets bigger yellowish*/

  height: 40%;
  width:6%;
  background-color:yellow;
  animation: circleit linear 4s ;


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
const Fucks = styled.div`
display:flex;
  flex-direction:row;
  justify-content:center;
  align-content:space-evenly;
  width:100%;
  height:100%; 
`
// const [circlerot,setCirclerot] = useState({
//   it:0+'deg', you:90+'deg'
// }) 

export default function Core(){

    return(
        <Container>
    <Circle>
      <Aligner><Bluedot /></Aligner>
    </Circle>
    <Circle>
      <Fucks>
      <Circlefucks />
      </Fucks>
    </Circle>
    </Container>
    );
}