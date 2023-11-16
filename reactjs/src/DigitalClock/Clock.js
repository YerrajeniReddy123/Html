import React from "react"
class Clock extends React.Component{
        constructor(props){
        super(props)
        this.state={
        ct:new Date().toLocaleTimeString()
        }
    }
    update_date=()=>{
        setInterval(()=>{
            this.setState({ct:new Date().toLocaleTimeString()})
        },1000)
    }
    render(){
        return <div>
            <h1>DigitalClock</h1>
            <h4>{this.state.ct}</h4>
            <button onClick={this.update_date}>ok</button>
        </div>
    }
}
export default Clock