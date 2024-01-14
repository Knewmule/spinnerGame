import {styled} from 'styled-components';
import { useState } from 'react';
const Fucks = styled.div`
display:flex;
  flex-direction:row;
  justify-content:center;
  align-content:space-evenly;
  width:100%;
  height:100%; 
`
const Drawoutspan = styled.span`
display:flex;
  justify-content:baseline;
  align-content:center;
  margin:1%;
  width:100%;
  height:50%;
  align-items:flex-end;
  transform: rotate(-40deg);
`
const Drawout = styled.p`
padding:0%;
  margin:0%;
  width:50%;
  height:50%;
  border-top-left-radius:100px;
  border:1px solid black;
  transform:rotate(${props=>props.id});
`
const Fucksr = styled.div`
display:flex;
  flex-direction:row;
  justify-content:center;
  align-content:space-evenly;
  width:100%;
  height:100%; 
  position:absolute;  
  top:50%;
`



export default function Circlefucks(){

    const circlerotate = [
        'it',0+'deg', 'you',90+'deg','them',-90+'deg','us',180+'deg'
    ]
    return (
            
            circlerotate.map((deg,i)=>{
              
              if(i%2 && i < 4){
                return(
              
              <> 
                
               
                  <Drawout key={i} id={deg}>
                  {console.log(i, deg)}
            <Drawoutspan key={i} >Fuck {circlerotate[i-1]}</Drawoutspan>
            </Drawout>
                
            
              </>
              )
              }else{
                <Fucksr>
                return (
                  
      
              
            <Drawout key={i}id={deg}>
            <Drawoutspan key={i}>Fuck Them</Drawoutspan>
            </Drawout>
            
            
            
                )
                </Fucksr>
              }
            })
            
    );
}