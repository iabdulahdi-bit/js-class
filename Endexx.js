// let sum = 0
// let step = 1
// while(step<=10){sum += step}
// console.log(sum)
// let firstname = "ahmed ali"
// // console.log(firstname)
// console.log(`ths ${firstname}`)

// for( let index=0; index<firstname.length; kindex++){
    
    // console.log(firstname[index])
// }
// let number = 1
// let sum = 0
// while ( number <= 10) {
//     sum += number
//     number++

    
//     console.log(sum)
// }
//    console.log(sum) 
// let number = 0

//   while(number <= 14)  do {
//     console.log(number)
//     number++
// } 
// emails = ["adam","ahmed"]
// for( let email of emails){
//     console.log(`this emali for the company o refactory${email}`)
// }


    // let produce = ["apple","banana","orange","mango","beans","jkfrot","mango"]
    // for(let name of produce){
    //     // console.log(name)
    //     if(name==="mango"){
    //         continue
    //     }
    //     console.log(name)
    // }

// for(const kGIproduce of produce){
//     console.log(kGIproduce)
//     if(kGIproduce == "orange"){
//         // console.log(kGIproduce)
//         break
//     }

// }
// let sum = 0
// while(true){

//     console.log(`this is new`)
//     sum++
//     if(sum>20)
//         {
//     break
    
//         }
// // }
// let sum = 0
// while(true){
//     console.log(`yes`)
//     sum++
//     if(sum>10){
//         break
// //     }
// // }
// let name = ["adam","ahmed","ali"]

// for( let user=0;user<name.length; user++){
//     user = user+name
// // }
// let user = [
//     "ali",
//     "ahmed","adam","baker"
// ]
// console.log(user.length)
// user[1] = "ibrahim"
// user[1] =   `${user[1]} KAMAL`
// console.log(user[1])
// console.log(user)
///
// let date_1 = new Date()
// let date_2 = new Date("2022-11-17")
// let timestime1 = date_1.getTime() 
// let timestime2 = date_2.getTime()
// let difference = timestime1 - timestime2
// console.log(difference)
// let sacond = difference/1000
// let muinte = sacond/60
// let hours = muinte/10
// let day = hours/24
// let week = day/7
// let month = day/30
// let year = day/365
// console.log(year)
// l
// let user = "a"||"b"||"c"
// let users = "b"
// if(users=="c"){
//     console.log(`yes is true`)
// }else if(users==="b"){
//     console.log(`no is not true `)
// }else{
//     console.log(`the valus is not run`)
// }
// function  returnSumOfTwoNumber(number1,number2){
//  let sum = number1 + number2
//  return sum
// }

// let sum = returnSumOfTwoNumber(10,40)
// console.log(sum)
// function calculteTex(amunt, text){
//     let tex = amunt + text
//     return tex
// }

// console.log(calculteTex(10,30))
// 
let number = [1,2,3,4,5,6,7,8,9,10]
let sum =  0
// function sumArray(number){
    // for(let index=0;index<number.length;index++){
    //     sum += number[index]
    //     console.log(sum)
    // }
//     return sum
// }
// let i = sumArray(number)

// console.log(i)
// let name = ["adam","ali",""]

// function a(name){
//     if(name === "f"){
//         return true
//     } else{
//         return false
//     }
// }
// let s = a("f")
// // console.log(s)
// function a(name){
//     return name === "ali"
// }
// let s = a("ahmed")
// console.log(s)
// let names = ["a","c","n","b"]
// console.log(names)
// let filterNames = names.filter((name)=>name==="n")
// console.log(filterNames)
let product = {
    "name":"ali",
    "purshasedby":"adam",
    "purshased date": new Date(2025-10-11),
    "wight": 240,
    praice : 40,
    "deletedby" : "ahmed",

}
// let purshasedby = "adam"
// console.log(product[purshasedby])
// // console.log(product)
// let name = "name"
// console.log(product[name])
for(let keys in product){
    // console.log(key)
    // console.log(product[key])
}
// console.log(Object.keys(product))
// console.log(Object.values(product))

// function greet(){
let produce = ["we","ee","gh"]
produce.forEach(function(produce , index){
    console.log(`produce ${produce} :${index}`)
})
let kglproduce = ["beans","grain maize","G-nuts","soybeans"]
kglproduce.push("green pes")
console.log(kglproduce)

let salesRecord = { 
        "ProduceName":"beans",
        "tonnage": 500,
       "buyName": "ahmed" , 
        "amountPaid": 1000,
        "salesDate": new Date("2025-10-1"),
       "isCreditSales": false
    }
    
    // console.log(salesRecord)
    let prudencePrice = [40,45,89,45,32]
   let total = 0
   for(let i= 0;i< prudencePrice.length;i++){
    total += prudencePrice[i]
    
    
    // console.log(total)
   }
//    console.log(total)
    const getUniqueDealers = new Set(["apple","orange","beans","apple"])
console.log(getUniqueDealers)

    