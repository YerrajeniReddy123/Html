class Account{
    min_bal=500
    total_amnt=0
    
    create_account=(AC_no)=>{
        console.log("I created an account with an account no: "+ AC_no)
    }

    deposit_account=(dept_amt)=>{
        console.log("I deposited an amount of "+ dept_amt)
    }

    check_bal=()=>{
        this.total_amnt = this.min_bal + this.dept_amt
    }




}
let a1=new Account()

a1.create_account(654556845)

a1.deposit_account(1000)
console.log(a1.check_bal())
