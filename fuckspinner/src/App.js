import React from 'react';
import './App.css';
import Header from './components/Header';
import { styled } from "styled-components";
import Circlefucks from "./components/Circlefucks";
import { useState,useCallback } from "react"; 
import Spinbutton from "./components/Spinbutton";
import { spaces } from './Spots';
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
  const space = [];
  let [spun,setSpun] = useState(false);
  let [bluestate,setBluestate] = useState( {x:0,y:0,width:0,height:0});
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
      let x = domNode.getBoundingClientRect().x;
      let width = domNode.getBoundingClientRect().width;
      let y = domNode.getBoundingClientRect().y;
      let height = domNode.getBoundingClientRect().height;
      let blueobj = {x,width,y,height};
      setBluestate(blueobj);
    }
  },[spun]);
  
   function handleBluestate (){
    spaces.map( (e,i) =>{
      let sobj ={x:e.x,width:e.width,y:e.y,height:e.height};
        space[i] = sobj;
    })

    console.log('itstate ',space[0].x);
    console.log('youstate ',space[1].x);
    console.log('themstate ',space[2].x);
    console.log('usstate ',space[3].x);
    return CollisionTest;
   
 }

 // Tell where the blue dot has collided with the board
 // @bluestate = bluedot 3us = us 2them = them @it[0] = it @you1 = you
function CollisionTest(){
  const namesArray = ['it','you','them','us'];
  space.map( (e,i)=> {
    if (bluestate.x < space[i].x + space[i].width &&
      bluestate.x + bluestate.width > space[i].x &&
      bluestate.y < space[i].y + space[i].height &&
      bluestate.height + bluestate.y > space[i].y) {
      
      console.log('hit'+namesArray[i]);
    
  }
  })
  return namesArray;

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
              <Circlefucks blueref={blueref} 
              ansec={ansec} spun={spun}/>
            </Fucks>
          </Circle>
          <Circle>
            {!spun && <Spinbutton data-cy="spinnow" spin={spin}/> }
          </Circle>
        </Container>
    </>
    );
}

export default App;
