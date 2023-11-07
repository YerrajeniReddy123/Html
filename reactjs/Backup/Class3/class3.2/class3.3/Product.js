import React from "react"
class Product extends React.Component{
    state
    constructor(props){
        super(props)
        this.state={
            Qty:1
        }
    }
   
    decr_handler=()=>{
        if (this.state.Qty>=2) {
            this.setState({Qty:this.state.Qty-1})
 
        }
    }
    inc_handler=()=>{
        this.setState({Qty:this.state.Qty+1})
    }
    render(){
        return <div>
            <h1>Product Component</h1>
            <button onClick={this.decr_handler}>-</button>
            {this.state.Qty}
            <button onClick={this.inc_handler}>+</button>
        </div>
    }
}
export default Product