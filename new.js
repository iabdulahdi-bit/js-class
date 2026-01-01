let i =0
// for(let a=1;a<=10;a++){
    // i=i+a
        // console.log(`step ${a} this is ${a}+${i}=${a+i}`)}
    


// console.log(i)
// let firstname = "adam"
// for(let step = 0; step<firstname.length; step++){
    
//     console.log(firstname[`step: this is this first leter ${}`])
// // }
// let age = 25
// function showAge(){
//     let age = 56
//     console.log(age)
// }
// (showAge)
// console.log(age)

// let ah = false
// while(adam==false){
//     console.log("add adam")
//     let = true
// }
// let q = 0;
// let a = 1;
// while(a <= 10){
//     q = q + a;
//     a++
//     console.log(q)
// }
// // console.log(q)
//  let produce  = [100,2000,3000]
//  let total = 0
//  for(let total=0;total<produce.length; total++){
//     total += produce
//     console.log(total)
//     average = total/produce.length
//     console.log(average)
//  }

// let emails = ["adam@gmail.com","adile@gmail.com","ahmed@gmail.com","ali@gmail.com"]

// function sendEmails(EmaliAddress){
//     console.log(`emalis can sed secsisful to ${EmaliAddress}`)
// }
// emails.forEach((email)=>{
//     console.log(`send emal secsess of all${email}`)

// })

// let produce = ["orang","banana","apple","beans"]
// produce.forEach((produce,index)=>{
//     console.log(`this ${produce}the number is ${index}`)
// })
let emails = ["adam@gmail.com","adile@gmail.com","ahmed@gmail.com","ali@gmail.com"]

let CAemails = emails.map((email)=>{
    return email.toUpperCase()
})
// console.log(emails)
// console.log(CAemails)
let num = [12,34,56,1,2,4,10]
  num.forEach((num)=>{
    // console.log(num)
 })

 let r = num.filter(num =>num% 2===0)

 
    
 
    

console.log(r)
let e = num.filter((num)=>{
    return num<10
})
// console.log(e)
let a = num.reduce((sum,num)=>{
    return sum+num
})

// console.log(a)

let sales = [
    {customerName: "adam",isCreditSales: true, total: 10000,},
     {customerName: "ahmed",isCreditSales: true, total: 10000,},
      {customerName: "ali",isCreditSales: true, total: 5000,},
       {customerName: "osman",isCreditSales: true, total: 10000,},
]
let filterSales = sales.reduce((total,sales)=>{
    return total+sales.total
},0)
console.log(filterSales)