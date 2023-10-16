let employees=[{empid:101,empname:'dilip',empsal:50000},
                {empid:102,empname:'viswas',empsal:20000},
                {empid:103,empname:'venky',empsal:10000}]

let data_list=()=>{
    let rows=""
    for(emp of employees){
        rows= rows+`<thead>
                        <th>${emp.empid}</th>
                        <th>${emp.empname}</th>
                        <th>${emp.empsal}</th>
                    </thead>`
        document.getElementById('details').innerHTML=rows
    }
    
}