let shop={
    Product:{
        product_id:101,
        product_name:"IPhone14pro",
        product_amnt:175000,
        product_color:['R','B','G','S']
    },

    users:[{emp_id:101,emp_name:"ydr",emp_sal:5654354}]
}
/*let{users}=shop
let{product_color}=Product
let[a]=product_color
console.log(a)

let[a]=users
let{emp_name}=a
console.log(emp_name)
console.log(a)
*/

let{Product:{product_amnt,product_id}}=shop
//let{product_amnt}=Product
console.log(product_amnt,product_id)