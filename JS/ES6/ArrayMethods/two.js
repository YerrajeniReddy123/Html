let employees=["rahul","sonia","Priyanka","Modi"]

let employees1=[]

/*for (emp of employees) {
    employees1.push(emp)
}
console.log(employees)
console.log(employees1)

employees.forEach(emp => {
    employees1.push(emp)
});
console.log(employees)
console.log(employees1)*/

employees.map((emp)=>{
    employees1.push(emp)
})
console.log(employees)
console.log(employees1)