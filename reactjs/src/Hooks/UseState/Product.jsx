import React, { useState } from "react";
let Product=()=>{
    let [Qty,setPrdt]=useState(1)

    return <>
    <h1>Product Component</h1>
    <hr />
    <button disabled={Qty<2} onClick={()=>{setPrdt(Qty-1)}}>-</button>
    <span>{Qty}</span>
    <button onClick={()=>{setPrdt(Qty+1)}}>+</button>
    </>
}
export default Product