import React from 'react'
class Data extends React.Component{
    employees=[{"id":1,"first_name":"Barnard","location":"Male"},
    {"id":2,"first_name":"Vitia","location":"Female"},
    {"id":3,"first_name":"Jaquith","location":"Female"},
    {"id":4,"first_name":"Moritz","location":"Male"},
    {"id":5,"first_name":"Ludvig","location":"Non-binary"},
    {"id":6,"first_name":"Alika","location":"Female"},
    {"id":7,"first_name":"Adrian","location":"Male"},
    {"id":8,"first_name":"Latrena","location":"Female"},
    {"id":9,"first_name":"Alf","location":"Male"},
    {"id":10,"first_name":"Stirling","location":"Male"}]
    render(){
        return <div>
            <h4>Data Component</h4>
            <hr />
            <table>
                <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Location</th>
                </thead>
                <tbody>
                    {this.employees.map((emp)=>{
                        emp
                    })}
                    <tr>
                    <td>{emp.id}</td>
                    <td>{emp.first_name}</td>
                    <td>{emp.location}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    }
}
export default Data