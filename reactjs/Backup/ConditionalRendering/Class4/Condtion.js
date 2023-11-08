import React from "react"
class Condition extends React.Component{
    state={
        qty:1
    }
    decr_handler=()=>{
        this.setState({qty:this.state.qty-1})
    }
    incr_handler=()=>{
        this.setState({qty:this.state.qty+1})
    }
    render(){
        return <div>
                    <h1>Condition Component</h1>
                    {JSON.stringify(this.state)}
                    <hr />
                    
                        
                        <button onClick={this.decr_handler}>-</button>
                        {this.state.qty}
                        <button onClick={this.incr_handler}>+</button>
                        {this.state.qty>2?<p>Out of Stock</p>:null}
                    
                         <h4>{this.state.msg}</h4>
                </div>
    }
}
export default Condition