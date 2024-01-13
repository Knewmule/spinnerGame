import { styled } from "styled-components";
const Container = styled.div`

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
      border-radius: 1000px; 
      margin: 0.5em;

`

const Aligner = styled.div`
/*Spinner Style */
  /* Blue dot*/
  .aligner span{ 
    display:inline;
    position:absolute;
    height:12px;
    width:12px;
    background-color:blue;
    border-radius:120px;
  }
  /*Spinner in the circle gets bigger yellowish*/
  .aligner {
    height: 80px;
    width:10px;
    background-color:yellow;
    animation: circleit linear var(--ansec) ;
  }
  .container div.circle div.aligner{
    position:absolute;
    left:92px;
    right:0px;
    top:60px;
    bottom:0px;
    z-index:1;
    transform:rotate(var(--rot3));
  }
  
  /*Spinner Keyframe Animations*/
  @keyframes circleit {
    1% {
    transform: rotate(var(--rot1));
    } 
    25% {
      transform: rotate(var(--rot2));
    }
    100%{
      transform: rotate(var(--rot3));
    } 
  }
`
export default function Core(){

    return(
        <Container>
    <Circle>
        <div className="aligner">
            <span id="spinner"></span>
        </div>
    </Circle>
    </Container>
    );
}