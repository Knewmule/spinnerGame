// import {styled} from 'styled-components';

// export const Spin = styled.div`
// display:flex;
// flex-direction:column;
// align-items:center;
// `
// export const Now = styled.button`
// display:flex;
// justify-content:space-evenly;
// align-items:flex-end;
// margin:0px;
// width:100%;
// height:100px;
// border-bottom:1px solid black;
// font-size:30px;
// background-color: #00ff00;
// border-top-left-radius:106px;
// border-top-right-radius:110px;
// color:black;
// `
// export const Score = styled.p`
// font-size:28px;
// color:black;
// `

import React from 'react';
import style from './Spinbutton.module.css';
export default function Spinbutton({spin}){

    return(
        <div className={style.spin}>
            <button onClick={spin}className={style.now}>Spin</button>
            <p className={style.score}>100</p>
        </div>
    )
    
}