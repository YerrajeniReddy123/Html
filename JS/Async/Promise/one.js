let do_task=(success,failure)=>{
//Insert data into database and get the boolean value
    let flag=true
    if (flag==false) {
        success("Data is inserted successfully!!")
    } else {
        failure("Data is not inserted!!")
    }

}
do_task((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})