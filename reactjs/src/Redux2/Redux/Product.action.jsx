let DECR='DECR'
let INCR='INCR'

let decr_Action=()=>{
    return {type:'DECR'}
}
let incr_Action=()=>{
    return {type:'INCR'}
}
export {decr_Action,incr_Action,DECR,INCR}
