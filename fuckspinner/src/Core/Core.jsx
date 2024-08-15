import { styled } from "styled-components";
import Circlefucks from "../Circlefucks/Circlefucks";
import { useState } from "react";
import Aligner from "../Aligner/Aligner";
import Spinbutton from "../Spinbutton/Spinbutton";

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
      <Aligner />
    </Circle>
    <Circle>
      <Fucks>
      <Circlefucks />
      </Fucks>
    </Circle>
    <Circle>
      <Spinbutton />
    </Circle>
    </Container>
    );
}