var arr=[101,102,103,104]
let res=arr.length
console.log(res)

//push method
var new_length=arr.push(105)
console.log(arr)
console.log(new_length)

//pop method
console.log(arr.pop())
console.log(arr)

//unshift method
let length=arr.unshift(100)
console.log(arr)
console.log(length)

//shift method
let remove=arr.shift()
console.log(arr)
console.log(remove)

//indexof
/*console.log(arr.indexOf(103))
console.log(arr.indexOf('ydr'))
console.log(arr.indexOf('123'))
console.log(arr.indexOf(103,104))
*/
//lastindexof method

console.log(arr.lastIndexOf(103))
console.log(arr.indexOf(103))

//reverse() method
let new_ref =arr.reverse()
console.log(new_ref)

//splice method
let returns=arr.splice(0,2)
console.log(arr)
console.log(returns)



