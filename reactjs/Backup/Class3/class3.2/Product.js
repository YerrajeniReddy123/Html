import React from "react";
class Product extends React.Component{
    state={
        Qty:1
    }
    incr_handler=()=>{
        this.setState({Qty:this.state.Qty+1})
    }
    decr_handler=()=>{
        if (this.state.Qty>=2) {
            this.setState({Qty:this.state.Qty-1})
        }
        
    }
    render(){
        return <div>
            <button onClick={this.decr_handler}>-</button>
            {this.state.Qty}
            <button onClick={this.incr_handler}>+</button>
        </div>
    }
}
export default Product