import React, { use } from "react";
import { useEffect, useState } from "react";
const [x,setx]=useState(0);
useEffect(()=>{
    console.log("useEffect called");
},[x])
return(
    <div>
        <h1>Value of x is : {x}</h1>
        <button onClick={() => setx(x + 1)}>Increment x</button>
    </div>
);
export default useEffect;