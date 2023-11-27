import React from "react"
import {useDispatch} from "react-redux"
import { decr_Action,incr_Action,INCR,DECR } from "../Redux/Product.action"
const Product =()=>{
    let dispatch = useDispatch()
    let decr_Handler=()=>{
        dispatch(decr_Action())
    }
    let incr_Handler=()=>{
        dispatch(incr_Action())
    }
    return <>
        <h4>Product Component</h4>
        <hr />
        <button onClick={decr_Handler}>-</button>
        <button onClick={incr_Handler}>+</button>
    </>
}
export default Product