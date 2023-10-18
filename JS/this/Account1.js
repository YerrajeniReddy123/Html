/*class Account{

    min_bal=500
    total_bal=0
    
    deposit_amnt=(dept_amnt)=>{
        this.total_bal=this.min_bal+this.total_bal+this.dept_amnt
    }
}

let a1=new Account()
a1.deposit_amnt(1000)
console.log(a1)
*/

class Account{
    min_Bal = 500
    acc_Bal =0

    open_Account(){}
    deposit_Amount(amount){
      this.acc_Bal = this.acc_Bal + amount
    }
}
let a1=new Account()
a1.deposit_Amount(10015)
console.log(a1)