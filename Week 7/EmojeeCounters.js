import React, { useState ,useEffect} from "react";
import sad from './sademoji.png';
import happy from './happyemoji.png';
import love from './Loveemoji.png';

function EmojeeCounter(props){
console.log("pic is ",props.pic)
const [pic, setPic]=useState(love)
const [count,setCount]=useState(0)
useEffect(()=>{
console.log ("function called",props.pic)
if (props.pic==="love")
 setPic(love)
else if (props.pic==="like")
 setPic(happy)
else if (props.pic==="sad")
 setPic(sad)
})
const ClickHandle=() =>
 {
 setCount(count+1)
 }
return (
    <div className="App">
 <p>{props.pic} <span></span>
 <button onClick={ClickHandle}>{count }
 <img src={pic} alt=""/>
 </button>
 </p>
</div>
)
}
export default EmojeeCounter;