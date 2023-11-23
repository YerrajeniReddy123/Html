import React, { useState } from "react"
const Login=()=>{
    let [user,setUser]=useState({email:"",password:""})
    let email_handler=(event)=>{
        setUser({...user,email:event.target.value})
    }
    let password_handler=(event)=>{
        setUser({...user,password:event.target.value})
    }
    let submit_handler=(event)=>{
        event.preventDefault()
    }
    return <>
        <h1>Login Component</h1>
        <pre>{JSON.stringify(user)}</pre>
        <hr />
        <form onSubmit={submit_handler}>
            <label >Email:::::::</label>
            <input type="text" onChange={email_handler}/><br />
            <label >Password</label>
            <input type="text" onChange={password_handler}/><br />

            <input type="submit" value="Login"/>
        </form>
    </>
}
export default Login