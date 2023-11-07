import React from "react"
class Product extends React.Component{
    state={
        Product:{
            brand:"Pushpa",
            price:1200,
            Qty:1
        }
    }
    dec_Handler=()=>{
        this.setState({Product:{
            ...this.state.Product,Qty:this.state.Product.Qty -1}})
    }
    inc_Handler=()=>{
        this.setState({Product:{
            ...this.state.Product,Qty:this.state.Product.Qty +1}})

    }
    render(){
        return <div>
            <pre>{JSON.stringify(this.state.Product)}</pre>
            <button onClick={this.dec_Handler}>-</button>
            {this.state.Product.Qty}
            <button onClick={this.inc_Handler}>+</button>
        </div>
    }
}
export default Product