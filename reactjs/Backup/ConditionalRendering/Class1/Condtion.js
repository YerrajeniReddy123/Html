import React from "react"
class Condition extends React.Component{
    state={
        islogin:true,
        msg:""
    }
    login_handler=()=>{
        this.setState({
            msg:"Welcome"
        })
    }
    logout_handler=()=>{
        this.setState({
            msg:"Visit Again"
        })
    }
    render(){
        return <div>
                    <h1>Condition Component</h1>
                    {JSON.stringify(this.state)}
                    <hr />
                    {
                        !this.state.islogin?<button onClick={this.login_handler}>Login</button>:<button onClick={this.logout_handler}>Logout</button>
                    }
                    <h4>{this.state.msg}</h4>
                </div>
    }
}
export default Condition