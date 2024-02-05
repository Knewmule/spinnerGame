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
  let [itstate,setItstate] = useState();
  let [youstate,setYoustate] = useState();
  let [themstate,setThemstate] = useState();
  let [usstate,setUsstate] = useState();
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
  let itref = useCallback(domNode =>{
    if(domNode){
      setItstate(domNode.getBoundingClientRect());
    }
  },[]);
  let usref = useCallback(domNode =>{
    if(domNode){
      setUsstate(domNode.getBoundingClientRect());
    }
  },[]);
  let themref = useCallback(domNode =>{
    if(domNode){
      setThemstate(domNode.getBoundingClientRect());
    }
  },[]);
  let youref = useCallback(domNode =>{
    if(domNode){
      setYoustate(domNode.getBoundingClientRect());
    }
  },[]);
  
  function handleBluestate (){
      
    console.log('bluestate ',bluestate);
    console.log('itstate ',itstate);
    console.log('youstate ',youstate);
    console.log('themstate ',themstate);
    console.log('usstate ',usstate);
    CollisionTest(bluestate.toJSON(),usstate.toJSON(),
            themstate.toJSON(),itstate.toJSON(),youstate.toJSON())
   
 }

 // Tell where the blue dot has collided with the board
 // @bluestate = bluedot @usstate = us @themstate = them @itstate = it @youstate = you
function CollisionTest(){
  if (bluestate.x < usstate.x + usstate.width &&
    bluestate.x + bluestate.width > usstate.x &&
    bluestate.y < usstate.y + usstate.height &&
    bluestate.height + bluestate.y > usstate.y) {
    console.log('usstate hit US');
}else if (bluestate.x < themstate.x + themstate.width &&
  bluestate.x + bluestate.width > themstate.x &&
  bluestate.y < themstate.y + themstate.height &&
  bluestate.height + bluestate.y > themstate.y) {
  console.log('themstate hit them');
}else if (bluestate.x < itstate.x + itstate.width &&
   bluestate.x + bluestate.width > itstate.x &&
   bluestate.y < itstate.y + itstate.height &&
   bluestate.height + bluestate.y > itstate.y) {
  console.log('itstate hit it');
}else if (bluestate.x < youstate.x + youstate.width &&
   bluestate.x + bluestate.width > youstate.x &&
   bluestate.y < youstate.y + youstate.height &&
   bluestate.height + bluestate.y > youstate.y) {
    console.log('youstate hit you');
}
  // Collision test for circle if needed
//   if (distance < circle1.radius + circle2.radius) {
//     // Collision detected!
// }
//   const dx = circle1.x - circle2.x;
//   const dy = circle1.y - circle2.y;
//   const distance = Math.sqrt(dx * dx + dy * dy);

//   const colliding = distance < circle1.radius + circle2.radius;
}

    return(
    <>
      <Header />
        <Container>
          <Circle>Settings
          </Circle>
          <Circle>
            <Fucks>
            {!spun  && bluestate !== null && handleBluestate() }
              <Circlefucks blueref={blueref} itref={itref} 
              usref={usref} themref={themref} youref={youref}
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
