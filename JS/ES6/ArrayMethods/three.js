let employees=["YDR","Modi","Sonia","Rahul"]
let employees1=[]

/*for (emp of employees) {
    employees1.push(emp.toUpperCase()) 
}

employees.forEach(emp => {
    employees1.push(emp.toUpperCase())
});*/

employees.map(emp=>{
    employees1.push(emp.toUpperCase())
})
console.log(employees)
console.log(employees1)
