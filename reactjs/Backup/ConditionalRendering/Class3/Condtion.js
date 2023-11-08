import React from "react"
class Condition extends React.Component{
    state={
        qty:1
    }
    decr_handler=()=>{
        this.state.qty=this.state.qty-1
    }
    incr_handler=()=>{
        this.state.qty=this.state.qty+1
    }
    render(){
        return <div>
                    <h1>Condition Component</h1>
                    {JSON.stringify(this.state)}
                    <hr />
                    {
                        !this.state.qty>=2?<button onClick={this.decr_handler}>-</button>:<button onClick={this.incr_handler}>+</button>
                    }
                    <h4>{this.state.msg}</h4>
                </div>
    }
}
export default Condition