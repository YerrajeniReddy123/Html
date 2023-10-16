let employees=[{empid:101,empname:'dilip',empsal:50000},
                {empid:102,empname:'viswas',empsal:20000},
                {empid:103,empname:'venky',empsal:10000}]

let data_list=()=>{
    let rows=""
    for(emp of employees){
        rows+=`<tr>
                        <td>${emp.empid}</td>
                        <td>${emp.empname}</td>
                        <td>${emp.empsal}</td>
                </tr>`
        document.getElementById('details').innerHTML=rows
    }
    
}