import styled, {keyframes} from 'styled-components';

export const Bluedot = styled.div`

/*Spinner Style */
  /* Blue dot*/
  left: 18%;
  right:0%;
  top:90%;
  bottom:0%; 
    
    position:absolute;
    height:20%;
    width:100%;
    background-color:blue;
    border-radius:100px;
  
`

const circleit = keyframes`
  1%{
  transform: rotate(${ (props) => (props.d1+'deg')});
  } 
  25%{
    transform: rotate(${(props) => (props.d2)}deg);
  }
  100%{
    transform: rotate({${props => props.d3}}deg);
  } 
`
export const Align = styled.span`

/*Spinner Keyframe Animations*/

/*Spinner in the circle gets bigger yellowish*/

  height: 40%;
  width:6%;
  background-color:yellow;
  // animation: circleit linear {${props => props.ansec}} ;
  animation-name: ${circleit};
 animation-duration: ${props => props.sec};
 animation-iteration-count: linear;

  position:absolute;
  left:50%;
  right:0%;
  top:30%;
  bottom:0%;
  z-index:1;
  transform:rotate(160deg);



`

export default function Aligner({d1,d2,d3,spun,sec}){

    return (
        <Align d1={d1}d2={d2}d3={d3}sec={sec} >
            <Bluedot />
        </Align>
    );
};
