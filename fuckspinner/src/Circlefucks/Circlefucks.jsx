import {styled} from 'styled-components';
import { useState } from 'react';
import  Aligner  from '../Aligner/Aligner.jsx';
// import {Aligner, Bluedot} from '../Core/Core.jsx';
// const Fucks = styled.div`
// display:flex;
//   flex-direction:row;
//   justify-content:center;
//   align-content:space-evenly;
//   width:100%;
//   height:100%; 
// `
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

const circlerotate = {
  it:0+'deg', you:90+'deg',them:-90+'deg',us:180+'deg'
}

export default function Circlefucks(){

    
    return (
            <>
            <Drawout id={circlerotate.it}>
              <Drawoutspan >Fuck It</Drawoutspan>
            </Drawout>
            <Drawout id={circlerotate.you}>
              <Drawoutspan>Fuck You</Drawoutspan>
            </Drawout>
          <Aligner />
          <Fucksr>
            <Drawout id={circlerotate.them}>
              <Drawoutspan>Fuck Em</Drawoutspan>
            </Drawout>
            <Drawout id={circlerotate.us}>
              <Drawoutspan>Fuck Us</Drawoutspan>
            </Drawout>
          </Fucksr>
            </>
    );
}