// import {styled} from 'styled-components';
import style from './Circlefucks.module.css'
import  Aligner  from './Aligner.jsx';
// export const Drawoutspan = styled.span`
// display:flex;
//   justify-content:baseline;
//   align-content:center;
//   margin:1%;
//   width:100%;
//   height:50%;
//   align-items:flex-end;
//   transform: rotate(-40deg);
// `
// export const Drawout = styled.p`
// padding:0%;
//   margin:0%;
//   width:50%;
//   height:50%;
//   border-top-left-radius:100px;
//   border:1px solid black;
//   transform:rotate(${props=>props.id});
// `
// export const Fucksr = styled.div`
// display:flex;
//   flex-direction:row;
//   justify-content:center;
//   align-content:space-evenly;
//   width:100%;
//   height:100%; 
//   position:absolute;  
//   top:50%;
// `

export const circlerotate = {
  it:0+'deg', you:90+'deg',them:-90+'deg',us:180+'deg'
}


export default function Circlefucks({spun,ansec,blueref}){

  const drawoutRotateIt ={
    transform:`rotate(${circlerotate.it})`
  }
  const drawoutRotateYou ={
    transform:`rotate(${circlerotate.you})`
  }
  const drawoutRotateThem ={
    transform:`rotate(${circlerotate.them})`
  }
  const drawoutRotateUs ={
    transform:`rotate(${circlerotate.us})`
  }


    return (
            <>
            <p style={drawoutRotateIt.it}className={style.drawout}id={circlerotate.it}>
              <span className={style.drawoutspan}>Fuck It</span>
            </p>
            <p style={drawoutRotateYou}className={style.drawout}id={circlerotate.you}>
              <span className={style.drawoutspan}>Fuck You</span>
            </p>
          {!spun && ansec !== undefined && <Aligner blueref={blueref} d1={null} d2={null} d3={null} d4={ansec.d3}sec={null} /> } 
          {spun && ansec !== undefined && <Aligner  d1={ansec.d1} d2={ansec.d2} d3={ansec.d3} d4={ansec.d3}sec={ansec.sec} /> 
            
            } 
      
          
          <div className={style.fucksr}>
          <p style={drawoutRotateThem} className={style.drawout}id={circlerotate.them}>
              <span className={style.drawoutspan}>Fuck Them</span>
            </p>
            <p style={drawoutRotateUs} className={style.drawout}id={circlerotate.us}>
              <span className={style.drawoutspan}>Fuck Us</span>
            </p>
          </div>
            </>
    );
}