let employees=[

    {id:101,name:'rahul',email:'rahul@gmail.com'},

    {id:102,name:'sonia',email:'sonia@gmail.com'},

    {id:103,name:'priyaka',email:'priyanka@gmail.com'},

    {id:104,name:'modi',email:'modipm@gmail.com'},

    {id:143,name:'ydr',email:'ydr@gmail.com'}

]

//console.log(employees[1].id)

/*Using forloop*/

/*for(var i=0;i<=employees.length-1;i++)
{
    console.log(employees[i].email)
}*/

for (ydr of employees) 
{
    console.log(ydr.name)
}