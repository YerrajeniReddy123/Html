let employees=[{"id":1,"name":"Rich","salary":"Yuan Renminbi"},
{"id":2,"name":"Alexia","salary":"Bolivar"},
{"id":3,"name":"Edgard","salary":"Ruble"},
{"id":4,"name":"Hanna","salary":"Sol"},
{"id":5,"name":"Corbie","salary":"Pound"}]

let create_employees=(emp)=>{
    return new Promise((resolve, reject) => {
        let flag=true
        setTimeout(() => {
            employees.push(emp)
            flag?resolve("Data is successfully inserted"):reject("Data is not inserted")
        }, 3000);
    })

}

let get_employees=()=>{
    setTimeout(() => {
        let rows=""
        for (emp of employees) {
            rows=rows+`<tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.salary}</td>
                        </tr>`   
        }
        document.getElementById("tbody_data").innerHTML=rows
    }, 2000);

}

create_employees({id:101,name:"YDR",salary:50000})
        .then((msg)=>{
            console.log(msg)
            get_employees()
        }).catch((err)=>{
            console.log(err)
        })