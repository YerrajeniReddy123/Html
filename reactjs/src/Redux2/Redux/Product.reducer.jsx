import { DECR,INCR } from "./Product.action"
let initialstate={
    qty:"1"
}
const product_reducer=(state=initialstate,action)=>{
    switch (action.type) {
        case "DECR":
            return {qty:qty-1}
        case "INCR":
            return {qty:qty+1}
        default:
            return state
    }
}
export {product_reducer}