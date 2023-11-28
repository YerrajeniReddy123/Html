import { DECR,INCR } from "./Product.action"
let initialState={
    qty:1
}
let product_reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "DECR":
            return {qty:state.qty-1}
        case "INCR":
            return {qty:state.qty+1}
        default:
            return state
    }
}
export {product_reducer}