import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { decr_Action,incr_Action } from "../Redux/Product.action"

const Product =()=>{

     let product=useSelector((state)=>{
        return state
    })
    
    let dispatch = useDispatch()


    let decr_Handler=()=>{
        dispatch(decr_Action())
    }
    let incr_Handler=()=>{
        dispatch(incr_Action())
    }

    return <>
        <h4>Product Component</h4>
        <pre>{JSON.stringify(product)}</pre>
        <button onClick={decr_Handler}>-</button>
        <span>{product.qty}</span>
        <button onClick={incr_Handler}>+</button>
    </>
}
export default Product