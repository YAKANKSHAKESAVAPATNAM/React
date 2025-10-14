import React from "react";
import CountUp from "react-countup";
import Tilty from "react-tilty";
import './Header.css'
import Image from './assets/react.svg';


const Addons = () => {
    
    return(   
        <div style={{textAlign:"center", marginTop:"20%"}}>
          <Tilty>
            <img src={Image}  />
            <h1  >  <CountUp end={1000} duration={5} /></h1>
          </Tilty>
        </div>
    
        
    )
}
export default Addons;