import React from "react";
import { useState } from "react";
// import Image from "./Image";
import { BrowserRouter,Router,Routes } from "react-router-dom";

function Image() {
    const [Imagepath, setImagepath]=useState(null)
    const GetData=(event)=>{
        const file=event.target.files[0];
        // const path=URL.createObjectURL(file);
        // setImagepath(path);
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
            // setImagepath(reader.result);
            console.log(reader.result);
        }
    }
    return(
        <>
        <input type="file" className="Image" onChange={(event)=>GetData(event)}/>
        {Imagepath ? <img src={Imagepath} alt="image cracked"/> : <></>}
        </>
    )
}
export default Image;