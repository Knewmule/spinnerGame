import {styled} from 'styled-components';
// import { useState } from 'react';
import { StyleSheetManager } from 'styled-components';
import isValidProp from '@emotion/is-prop-valid';
import  Aligner  from './Aligner.jsx';
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


export default function Circlefucks({spun,ansec}){

    return (
            <>
            <Drawout id={circlerotate.it}>
              <Drawoutspan >Fuck It</Drawoutspan>
            </Drawout>
            <Drawout id={circlerotate.you}>
              <Drawoutspan>Fuck You</Drawoutspan>
            </Drawout>
          {spun ?
          <StyleSheetManager shouldForwardProp={ansec => isValidProp(ansec)}>
          <Aligner  spun={spun} d1={ansec.d1} d2={ansec.d2} d3={ansec.d3} d4={ansec.d3}sec={ansec.sec} /> 
      </StyleSheetManager> : <Aligner  spun={spun} d1={null} d2={null} d3={null} d4={ansec.d3}sec={null} /> 
          }
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