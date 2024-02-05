import './App.css';
import Header from './components/Header';
import { styled } from "styled-components";
import Circlefucks from "./components/Circlefucks";
import { useState,useCallback } from "react";
import Aligner from "./components/Aligner";
import Spinbutton from "./components/Spinbutton";

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
 function App(){
  let [spun,setSpun] = useState(false);
  let [bluestate,setBluestate] = useState({});
  let [ansec,setAnsec] = useState({
    sec:0,d1:0,d2:0,d3:0
  });
  // Add the spinner animation for N seconds
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
  function addsec(){
    let s = getRandomArbitrary(4,5);
    let deg3 = getRandomArbitrary(651,1220);
    let deg2 = getRandomArbitrary(331,650);
    let deg1 = getRandomArbitrary(0,330);
    let re = {
      sec:Math.ceil(s),d1:Math.ceil(deg1),d2:Math.ceil(deg2),d3:Math.ceil(deg3)
    }

    return re;
  };
// Spin the spinner
  function spin(){
    
    let re = addsec();

    const spinTimeout = setTimeout( ()=>{
      setSpun(false);  
      clearTimeout(spinTimeout);
      
    }, ansec.sec*1000);
    setSpun(true);
    
    setAnsec({d1:re.d1,d2:re.d2,d3:re.d3,sec:re.sec});
    console.log(ansec.d1,ansec.d2,ansec.d3, ansec.sec);
    
  }
  // See where the blue dot is on the spinner
  let blueref = useCallback(domNode =>{
    
    if(!spun && domNode){
      setBluestate(domNode.getBoundingClientRect());
    }
  },[]);
  function handleBluestate (){
      
    console.log(bluestate);
   
 }

    return(
      <>
      <Header />
    <Container>
      <Circle>
      </Circle>
      <Circle>
        <Fucks>
        {!spun  && handleBluestate()}
          <Circlefucks blueref={blueref}  
  ansec={ansec} spun={spun}/>
        </Fucks>
      </Circle>
      <Circle>
        {!spun && <Spinbutton spin={spin}/> }
      </Circle>
    </Container>
    </>
    );
}

export default App;
