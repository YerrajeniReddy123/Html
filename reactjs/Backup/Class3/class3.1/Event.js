import React from 'react'
class Event extends React.Component{
    state={
        msg:"GoodNight"
    }
    get_handler=()=>{
        this.setState({msg:'SweetDearms'})
    }
    render(){
        return <div>
            <h1>Event Component</h1>
            <h2>Message:{this.state.msg}</h2>
            <button onClick={this.get_handler}>OK</button>
        </div>
    }
}
export default Event