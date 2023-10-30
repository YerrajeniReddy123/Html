let goto_GOA=(success,failure)=>{
    let amount=8000
    if (amount>=10000) {
        success("Enjoy!!!Pandago!!")
    } else {
        failure("Sit in PG and get a job")
        
    }

}
goto_GOA((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})
