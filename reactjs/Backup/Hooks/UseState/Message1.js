import React, { useState } from "react";
let Message1=()=>{
    let [Msg,setMsg]=useState("Hello")
  
    return <>
        <h1>Message Component</h1>
        <hr />
        <pre>{Msg}</pre>
        <hr />
        <h2>value:{Msg}</h2>
        <button onClick={()=>{
            setMsg("Good Morning")
        }}>GM</button>
        <button onClick={()=>{
            setMsg("Good Night")
        }}>Gn</button>
        </>
}
export default Message1