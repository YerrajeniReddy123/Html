class Address{
    constructor(h_no,area,city,state){
        console.log("Address class constructor")
        this.h_no=h_no
        this.area=area
        this.city=city
        this.state=state
    }
    update_address(){}
}
module.exports=Address

class Saving_Account{
    constructor(acc_id,acc_name,amount,address,CA){
        console.log("Saving class constructor")
        this.acc_id=acc_id
        this.acc_name=acc_name
        this.amount=amount
        this.address=address
        this.CA=CA
    }
}

class Current_Account{
    constructor(acc_id){
        console.log("Current class constructor")
        this.acc_id=acc_id
    }
    
}

let s1=new Saving_Account(101,"YDR",10000,new Address(19,"Sri krishna lakeview-1","Bangalore","Karnataka"),new Current_Account(143))
console.log(s1)

