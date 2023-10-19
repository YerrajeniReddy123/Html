class Account{
    min_bal=500
    bank_bal=0
    open_account=()=>{
        console.log("I opened the account successfully")
    }
    deposit_account=(amnt)=>{
        this.bank_bal=this.bank_bal+amnt
    }    
    get_amount=()=>{
        return this.bank_bal-this.min_bal
    }
    withdrawl_amnt=(amnt)=>{
        this.bank_bal=this.bank_bal-amnt
    }
}
let a1=new Account()
a1.open_account()
a1.deposit_account(1000)
a1.deposit_account(2000)
console.log(a1)

let bal=a1.get_amount()
console.log(bal)

a1.withdrawl_amnt(250)
console.log(a1)
