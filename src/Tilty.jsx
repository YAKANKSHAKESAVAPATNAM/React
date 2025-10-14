import React from "react";
import Tilty from 'react-tilty';
import Image from './assets/react.svg';
import './Header.css';
function Tilt() {
    return(
        <div style={{textAlign:"center", marginTop:"10%"}}>
            <Tilty>
                <img src={Image} alt="react" />
            </Tilty>
        </div>
    )
}   
export default Tilty;