class Account{
    min_bal=500
    total_bal=0
    open_account(){
        console.log("I opened the account succesfully")
    }
    deposit_amount(amnt){
        this.total_bal=this.total_bal+amnt
    }
    get_bal(){
        return this.total_bal-this.min_bal
    }
    with_dwrawl(amount){
        this.total_bal=this.total_bal-amount
    }
}
    let a1=new Account()
    a1.open_account()
    a1.deposit_amount(1000)
    a1.deposit_amount(2000)
    console.log(a1)

    let bal=a1.get_bal()
    console.log(bal)

    a1.with_dwrawl(500)
    a1.with_dwrawl(500)
    console.log(a1)