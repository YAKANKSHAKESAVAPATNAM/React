import React from "react";
import { useState } from "react";
 import { useEffect } from "react";
 import {useParams} from "react-router-dom"
 import IMG from "./assets/react.svg"

 function ProductInfo(){
    const Data=[
        {
        'ID':"1",
        'Name':"React",
        'Version':"18.2.0",
        'Author':"Meta"
        },
        {
        'ID':"2",
        'Name':"Vite",
        'Version':"4.3.9",
        'Author':"Evan You"
        },
        {
        'ID':"3",
        'Name':"Vue",
        'Version':"3.2.47",
        'Author':"Evan You"
        }
    ]
    const ReceivedData=useParams();
    console.log(ReceivedData);
    const [mycard,setmycard]=useState(null)
    useEffect(()=>{
        Data.filter(ele=>{
            if(ele.ID===parseInt(ReceivedData.ID)){
                setmycard(ele)
            }}
        )
    },[ReceivedData.ID])
    return(
        <>
        {mycard?
        <div className="parent">
            <div className="card">
                <img src={IMG} alt={mycard.Name} />
                <h2>{mycard.Name}</h2>
                <p>Version: {mycard.Version}</p>
                <p>Author: {mycard.Author}</p>
            </div>
        </div>
        :<h2>No Data Found</h2>}
        </>
    )

 }
export default ProductInfo;