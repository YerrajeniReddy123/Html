const Address=require("./bank")
class credit_card{
    constructor(cc_no,cc_name,address){
        this.cc_no=cc_no
        this.cc_name=cc_name
        this.address=address
    }

}
let cc1=new credit_card("cv044","dilip",new Address(19,"chowdeswari nagar","Jayanagar","Bangalore"))
console.log(cc1)