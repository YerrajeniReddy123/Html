import React from "react"
import { render } from "react-dom"
class Component extends React.Component{
  
        msg="Good Night"
   
    handler() {
        this.setState({msg:"Sweet Dreams"})
   }
    render(){
        return <>
            <h1>Component</h1>
            {this.msg}
            <button onClick={this.handler}>ok</button>
        </>
    }
}
export default Component