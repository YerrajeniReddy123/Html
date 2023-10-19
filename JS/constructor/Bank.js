class Bank{
    acc_no;
    min_bal=500
    constructor(name,Number,id){
        this.branch="Devasandra"
        this.amnt_bal=0
        this.name=name
        this.ph_no=Number
        this.acc_no=id
    }
    open_account(){
        console.log(this.name+ " opened a new account with minimum bal of "+this.min_bal)
    }
    deposit_amount(amnt){
        this.amnt_bal=this.amnt_bal+amnt
    }
    get_amount(){
        return this.amnt_bal-this.min_bal
    }
    withdrawl(amount){
        this.amnt_bal=this.amnt_bal-amount
    }

}
let a1=new Bank("YDR",9848673078,"6588sggg97")
let a2=new Bank("Chinnu",8328403427,"4fsdf487")


a1.open_account()
a2.open_account()

a1.deposit_amount(30000)
a2.deposit_amount(20000)
a1.deposit_amount(30000)
a2.deposit_amount(20000)

let get_amount1=a1.get_amount()
let get_amount2=a2.get_amount()

console.log(get_amount1)
console.log(get_amount2)

a1.withdrawl(9500)
a2.withdrawl(9500)

console.log(a1)
console.log(a2)

