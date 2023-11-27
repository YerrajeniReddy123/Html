import { createStore } from "redux";
import { msg_reducer } from "./Message.reducer";
let store=createStore(msg_reducer)

export {store}