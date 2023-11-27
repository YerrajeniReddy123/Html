import { createStore } from "redux";
import { product_reducer } from "./Product.reducer";
let store=createStore(product_reducer)

export {store}