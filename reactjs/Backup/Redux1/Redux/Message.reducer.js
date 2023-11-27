import { GM,GN } from "./Message.action"
let initialstate={
    message:"Hello...."
}
const msg_reducer=(state=initialstate,action)=>{
   
    switch (action.type) {
        case "GM":
            return {message:"Good Morning"}
        case "GN":
            return {message:"Good Night"}
    
        default:
            return state
            
    }
}
export {msg_reducer}