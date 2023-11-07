import React from "react";
class Product extends React.Component{
    state={
        product:{
            name:"Lenova ThinkPad",
            price:27000,
            qty:1,
            image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpxAY1wG0Em5xsx4m8DVYIbAnpltMKle6hAECGclH7c7m3aWOd0vOMCzP5427LsTHYnlFcz4ZVRbQ-WG9DsC9fzE_uSwupZqP27yVdFeFC7M8go_Z-cypx6g2sM735zBs18m8f0Ep0Y5k&usqp=CAc"
        }
    }
    dec_Handler=()=>{
        if (this.state.product.qty>=2) {
            this.setState({product:{
                ...this.state.product,qty:this.state.product.qty-1
            }})
        }
       
    }
    inc_Handler=()=>{
        this.setState({product:{
            ...this.state.product,qty:this.state.product.qty+1
        }})
    }
    render(){
        return <div className="Container">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <table className="table table-hover table-stripped">
                        <thead>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Qty</th>
                            <th>Total Price</th>
                        </thead>

                        <tbody>
                        <tr>
                           
                            <td>{this.state.product.name}</td>
                            <td>{this.state.product.price}</td>
                            <td><img width={100} src={this.state.product.image} alt="" /></td>
                            <td><i onClick={this.dec_Handler} className='fa fa-minus-circle'></i>{this.state.product.qty}<i onClick={this.inc_Handler} className='fa fa-plus-circle'></i></td>
                            <td>{this.state.product.price*this.state.product.qty}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
           
        </div>
    }
}
export default Product