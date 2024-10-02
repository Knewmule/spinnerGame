import React,{useRef} from 'react';
import style from './App.module.css';
import Header from './components/Header'; 
import Circlefucks from "./components/Circlefucks";
import { useState,useCallback } from "react"; 
import Spinbutton from "./components/Spinbutton";
import { spaces,getRandomArbitrary } from './Spots';
import useCollision from './hooks/useCollision';

 function App(){ 
  // let a = '';
  let [hit,setHit] = useState('');
  let [spun,setSpun] = useState(false);
  // let [bluestate,setBluestate] = useState({x:0,y:0,width:0,height:0});
  let [ansec,setAnsec] = useState({
    sec:0,d1:0,d2:0,d3:0
  });
  let blueref = useRef(null);
  function addsec(){
    let s = getRandomArbitrary(1,1);
    let deg3 = getRandomArbitrary(352,1220);
    let deg2 = getRandomArbitrary(331,650);
    let deg1 = getRandomArbitrary(45,330);
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
    setAnsec({d1:re.d1,d2:re.d2,
      d3:re.d3,sec:re.sec});
    console.log(ansec.d1,ansec.d2,ansec.d3, ansec.sec);
  }
  // // See where the blue dot is on the spinner
  //  blueref = useCallback(domNode =>{
    
  //   if(!spun && domNode){
  //     let x = domNode.getBoundingClientRect().x;
  //     let width = domNode.getBoundingClientRect().width;
  //     let y = domNode.getBoundingClientRect().y;
  //     let height = domNode.getBoundingClientRect().height;
  //     let blueobj = {x,width,y,height};
  //     setBluestate(blueobj);
  //   }
  // },[spun]);
  
   function HandleBluestate (){
    // console.log(spaces)
    
      //  a = CollisionTest();
       setHit(useCollision(blueref,spun))
      console.log('a'+hit)
      return(
        <p>{hit}</p>
      )
   
 }

 // Tell where the blue dot has collided with the board
 // @bluestate = bluedot 3us = us 2them = them @it[0] = it @you1 = you
//  function isCircleCollidingWithSquare(circleX, circleY, circleRadius, 
//   squareX, squareY, squareWidth, squareHeight) {
//   // Find the closest point on the square to the circle's center
//   let closestX = Math.max(squareX, Math.min(circleX, squareX + squareWidth));
//   let closestY = Math.max(squareY, Math.min(circleY, squareY + squareHeight));

//   // Calculate the distance between the circle's center and the closest point on the square
//   let distanceX = circleX - closestX;
//   let distanceY = circleY - closestY;
//   let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

//   // Check if the distance is less than the circle's radius
//   return distance <= circleRadius;
// }

// const checkCollision = (spot) => {
//   const distance = Math.sqrt(
//     (bluestate.x - spot.x) ** 2 + (bluestate.y - spot.y) ** 2
//   );
//   return distance <= spot.width/2;
// };
//  function CollisionTest(){
//   let collide = null;
//   let collide1 = null;
//   const radius = bluestate.width/2;
//   const namesArray = ['it','you','them','us'];
//   spaces.map( (e,i)=> {
//        collide1 = isCircleCollidingWithSquare(bluestate.x,
//         bluestate.y,radius,e.x,
//         e.y,e.width,
//         e.height)
//        collide = checkCollision(e);
//       console.log('hit'+collide+collide1);

      
//   })
//   if(collide && collide1){
//     console.log(namesArray[2])
//     return (namesArray[2])
//   }
//   if(!collide && !collide1){
//     console.log(namesArray[1])
//     return (namesArray[1])
//   }
//   if(!collide && collide1){
//     console.log(namesArray[3])
//     return (namesArray[3])
//   }
//   if(collide && !collide1){
//     console.log(namesArray[0])
//     return (namesArray[0])
//   }
// }

    return(
    <>
      <Header />
        <main className={style.container}>
          <div className={style.circle}>
            Settings
          </div>
          <div className={style.circle}>
              <div className={style.fucks}>
                <Circlefucks blueref={blueref} 
                ansec={ansec} spun={spun}/>  
              </div>  
          </div>
          <div className={style.circle}>
            {!spun && 
            <Spinbutton data-cy="spinnow" spin={spin}/> 
            }
            
            {!spun  && 
              <p>{HandleBluestate()}</p> }
          </div>
        </main>
    </>
    );
}

export default App;
