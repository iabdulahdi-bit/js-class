
// part A
// variable declaration and type checking
let name = "ahmed"
let number = +2567788342
let age = 29
let ticket = true
let date = new Date();
let traveDaate = new Date("2025-10-11")
// checking
console.log(typeof`${name}`)
console.log(typeof age)
console.log(number)
//  part B
// Mantipulation and validation
if(name.length>=5 && age >= 29){
    console.log("approved")

} else{
    console.log("rejected")
}

// part C 
// Conditional logic and business
if (name==="ahmed" &&  age === 29) {
    return "check in have tecked"
} else {
return"no check in don,t have tecked"}
console.log(name && age)