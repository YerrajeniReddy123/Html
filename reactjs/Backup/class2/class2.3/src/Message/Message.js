import React from "react"
class Message extends React.Component{
    message="Good Morning"
    Employee_Name="YDR"
    emp={id:101,name:"Dilip",sal:50000,location:["Maldives","Goa","koramangala"]}
    
    render(){
        return <div>
            <h1>Message Component</h1>
            <hr />
            <h2>{this.message}</h2>
            <h3>{this.Employee_Name}</h3>
            <hr />
            <h4>{this.emp.name}</h4>
            {/*<h4>{}</h4>*/}
            <pre>{JSON.stringify(this.emp)}</pre>
            <pre>{JSON.stringify(this.emp.location[1])}</pre>

        </div>
    }

}
export default Message