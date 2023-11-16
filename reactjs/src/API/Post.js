import React from "react"
import Axios from 'axios'
class Post extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    get_data=()=>{
        Axios.get('https://jsonplaceholder1.typicode.com/posts')
        .then((resp)=>{
            this.setState({users:resp.data}) 
        })
        .catch((err)=>{
            
        })
    }
    render(){
        return <>
            <h1>{JSON.stringify(this.state.users)}</h1>
            <button onClick={this.get_data}>Get Data</button>
        </>
    }
}
export default Post