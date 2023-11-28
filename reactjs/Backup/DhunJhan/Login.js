import React, {useState} from 'react'
import axios from 'axios'

const Login=(onLogin)=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const handleLogin=async()=>{
        try{
            const response=await axios.post('https://stg.dhunjam.in/account/admin/login',{
                username: "DJ@4",
                password: "Dhunjam@2023"
            })

            const token=response.data.token

            onLogin(token)
        }
        catch(error){
            console.error('Login failed:',error)
        }
    }
    return <div >
        
        <div className="container m-5"  >
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6" >
                
                    <form >
                        <h1  style={{textAlign:'center',fontSize:32}} >VenueAdminLogin</h1>
                        <div className='form-group'  >
                            <input style={{fontSize:16,fontFamily:'Poppins'}}  type="text" className='form-control' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                        
                        <div className='form-group'>
                            <input style={{fontSize:16,fontFamily:"Poppins"}} type="password" className='form-control' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input style={{width:550,fontSize:16,fontFamily:"Poppins",backgroundColor:"blueviolet",color:"white"}} type="submit" className='form-control' value="Sign in" ></input>
                        </div>
                        <div className="form-group" style={{textAlign:'center',fontSize:16,color:"white"}}> 
                            <a href="" >New Registration?</a> 
                        </div>
                       
                    </form>

                </div>
                <div className="col-3"></div>
            </div>
        </div>
       
            
        </div>
}
export default Login