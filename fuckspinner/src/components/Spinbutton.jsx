import {styled} from 'styled-components';

const Spin = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const Now = styled.button`
display:flex;
justify-content:space-evenly;
align-items:flex-end;
margin:0px;
width:100%;
height:100px;
border-bottom:1px solid black;
font-size:30px;
background-color: #00ff00;
border-top-left-radius:106px;
border-top-right-radius:110px;
color:black;
`
const Score = styled.p`
font-size:28px;
color:black;
`
export default function Spinbutton({spin}){

    return(
        <Spin>
            <Now onClick={spin}>Spin</Now>
            <Score>100</Score>
        </Spin>
    )
    
}