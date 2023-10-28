let emps=[{emp_id:101,emp_name:"rahul",emp_sal:9},
    {emp_id:102,emp_name:"Sonia",emp_sal:99}
]

let create_employees=(emp,callback)=>{
    setTimeout(() => {
        emps.push(emp)
        callback()
    }, 4000);

}
let get_employees=()=>{
    setTimeout(() => {
        let rows=""

        for (emp of emps) {
            rows=rows +`<tr>
                        <td>${emp.emp_id}</td>
                        <td>${emp.emp_name}</td>
                        <td>${emp.emp_sal}</td>
                        </tr>`
        }
        document.getElementById('abc').innerHTML=rows
    }, 2000);
    
}

create_employees({emp_id:103,emp_name:"Priya",emp_sal:999},get_employees)
