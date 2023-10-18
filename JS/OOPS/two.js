class Account{
        min_bal=500
        
        open_account=(amt)=>{
            console.log("Account is successfully opened "+": "+amt)
        }
        deposit_account=(depo)=>{
            console.log("Amount is deposited in the account"+": " +depo )
        }
        with_drawl=(take)=>{
            console.log("Amount is succesfully drawn "+": "+take)
        }
        check_bal=()=>{
            console.log("Current bal is")
        }
        check_statement=()=>{
            console.log("Server busy")
        }
        close_account=()=>{
            console.log("Account is successfully closed")
        }

}
let a1=new Account()
console.log(a1.min_bal)
a1.open_account(500)
a1.deposit_account(100)
a1.with_drawl(1000)