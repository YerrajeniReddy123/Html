import react from 'react'
class Login1 extends react.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
    /*email_Handler=(event)=>{
        this.setState({email:event.target.value})
    }
    password_Handler=(event)=>{
        this.setState({password:event.target.value})
    }*/
    update_Handler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submit_Handler=(event)=>{
        event.preventDefault()
    }
    render(){
        return <>
            <h1>Login Component</h1>
            <hr />
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submit_Handler} >
                <label >Email/Name</label>
                <input type="text" onChange={this.update_Handler} name='email'/><br />

                <label >Password</label>
                <input type="text" onChange={this.update_Handler} name='password'/><br />

                <input type="Submit" />
            </form>
        </>
    }
}
export default Login1