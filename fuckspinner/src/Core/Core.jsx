import { styled } from "styled-components";
import Circlefucks from "../Circlefucks/Circlefucks";
import { useState } from "react";
import Aligner from "../Aligner/Aligner";
import Spinbutton from "../Spinbutton/Spinbutton";

const Container = styled.main`
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
export default function Core(){
  let [spun,setSpun] = useState(false);
  let [ansec,setAnsec] = useState({sec:1});
  // Add the spinner animation for N seconds
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
  function addsec(){
    let sec = getRandomArbitrary(1,4);
    console.log(sec);

    return sec;
  };

  function spin(){
    setSpun(true);
    setAnsec({sec:6});
  }
    return(
    <Container>
      <Circle>
        <Aligner />
      </Circle>
      <Circle>
        <Fucks>
          <Circlefucks ansec={ansec} spun={spun}/>
        </Fucks>
      </Circle>
      <Circle>
        <Spinbutton spin={spin}/>
      </Circle>
    </Container>
    );
}