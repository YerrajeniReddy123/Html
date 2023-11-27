import react from 'react'
//import { useState } from 'react'
import { gm_Action,gn_Action } from '../Redux/Message.action'
import {useDispatch} from "react-redux"

const Message=()=>{
    //let[msg,setMsg]=useState({message:"Hello"})
    let dispatch=useDispatch()    
    let gm_Handler=()=>{
        dispatch(gm_Action())
    }
    let gn_Handler=()=>{
        dispatch(gn_Action())
    }
        return <>
        <h1>Message Component</h1>
        
        <button onClick={gm_Handler}>GM</button>
        <button onClick={gn_Handler}>Gn</button>
        </>
}
export default Message