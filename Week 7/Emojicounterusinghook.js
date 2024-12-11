import React, { useEffect, useState } from "react";
import sad from './sademoji.png';
import happy from './happyemoji.png';
import love from './Loveemoji.png';

function Imagecounter() {
    const[image,setimage]=useState("")

    const text =(Event)=>{
        const inputText = Event.target.value.toLowerCase();
        if (inputText==="happy"){
            setimage(happy);
        } else if (inputText==="love"){
            setimage(love);
        } else if(inputText==="sad"){
            setimage(sad);
        }else{
            setimage("");
        }

    };
 return (

    <div className="App">
 <h1>Image counter</h1>
 <input type="text" placeholder="Type happy, like, or sad" onChange={text}/>
 <label>
 {image ?<img src={image} alt="icon" style={{ width: "100px" }}/> : "No image"}
 </label>
    </div>
 );
}
export default Imagecounter;