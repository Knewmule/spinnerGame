import { styled } from "styled-components";
import Circlefucks from "./Circlefucks";
import { useState } from "react";
import Aligner from "./Aligner";
import Spinbutton from "./Spinbutton";

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
  let [ansec,setAnsec] = useState({
    sec:'3s'
  });
  // Add the spinner animation for N seconds
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
  function addsec(){
    let s = getRandomArbitrary(1,4);
    let deg3 = getRandomArbitrary(451,770);
    let deg2 = getRandomArbitrary(231,450);
    let deg1 = getRandomArbitrary(10,230);
    let re = {
      sec:Math.ceil(s),d1:Math.ceil(deg1),d2:Math.ceil(deg2),d3:Math.ceil(deg3)
    }

    return re;
  };

  function spin(){
    
    let re = addsec();

    const spinTimeout = setTimeout( ()=>{
      setSpun(false);  
      clearTimeout(spinTimeout);
    }, re.sec*1000);
    setSpun(true);
    setAnsec({d1:re.d1,d2:re.d2,d3:re.d3,sec:re.sec});
    console.log(ansec.d1,ansec.d2,ansec.d3, ansec.sec);
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
        {!spun && <Spinbutton spin={spin}/>}
      </Circle>
    </Container>
    );
}