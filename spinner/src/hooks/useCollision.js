import { useState,useCallback,useEffect } from "react";
import { spaces,isCircleCollidingWithSquare } from '../Spots';
const checkCollision = (spot,bluestate) => {
    const distance = Math.sqrt(
      (bluestate.x - spot.x) ** 2 + (bluestate.y - spot.y) ** 2
    );
    return distance <= spot.width/2;
  };

function CollisionTest(bluestate){
    let collide = null;
    let collide1 = null;
    const radius = bluestate.width/2;
    const namesArray = ['it','you','them','us'];
    spaces.map( (e,i)=> {
         collide1 = isCircleCollidingWithSquare(bluestate.x,
          bluestate.y,radius,e.x,
          e.y,e.width,
          e.height)
         collide = checkCollision(e);
        console.log('hit'+collide+collide1);
    })
    if(collide && collide1){
      console.log(namesArray[2])
      return (namesArray[2])
    }
    if(!collide && !collide1){
      console.log(namesArray[1])
      return (namesArray[1])
    }
    if(!collide && collide1){
      console.log(namesArray[3])
      return (namesArray[3])
    }
    if(collide && !collide1){
      console.log(namesArray[0])
      return (namesArray[0])
    }
  }
function con(spun,domNode,setBluestate){
    if(!spun && domNode){
        let x = domNode.getBoundingClientRect().x;
        let width = domNode.getBoundingClientRect().width;
        let y = domNode.getBoundingClientRect().y;
        let height = domNode.getBoundingClientRect().height;
        let blueobj = {x,width,y,height};
        setBluestate(blueobj);
      }
}
export default function useCollision(blueref,spun){
    let [bluestate,setBluestate] = useState({x:0,y:0,
        width:0,height:0})
    let [dom,setDom] = useState();
    let [hit,setHit] = useState('')
    let [error,setError] =useState('')
    let [loading,setLoading] = useState();
    // See where the blue dot is on the spinner
   blueref = useCallback(domNode =>{

    
        setDom(domNode);
        setHit(CollisionTest(bluestate))
    
  },[]);

  useEffect(()=>{
    try{
        if(!spun){
            setLoading(true);
            con(spun,dom,setBluestate)
        }else{
            console.log('els')
            setLoading(false);
        }
    }catch(e){
        setError('useCollision Error: '+ e);
    }
  },[])
    
    return{
        hit,
        loading,
        error,
    }
}