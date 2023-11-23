import React, { useState } from "react";

let Message=()=>{
    let [Msg,setMsg]=useState("Hello")
    let gm_Handler=()=>{
        setMsg("Good Morning")
    }
    let gn_Handler=()=>{
        setMsg("Good Night")
    }
    return <>
        <h1>Message Component</h1>
        <hr />
        <pre>{Msg}</pre>
        <button onClick={gm_Handler}>GM</button>
        <button onClick={gn_Handler}>GN</button>
    </>


}
export default Message