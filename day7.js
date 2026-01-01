// let arr = [2,4,5,8]
// let sum = 0
// for(step = 0;step<arr.length;step++)
//     sum =sum + arr[step]
// console.log(arr[step])
// console.log(sum)

function returnSumOfTwoNmber(n1,n2){
let sum = n1 + n2
return sum
}
// let sum = returnSumOfTwoNmber()
// console.log(returnSumOfTwoNmber(12,45))
function calculateTax(amount, tax){
    let totaltax = amount * tax
    return totaltax
}

// console.log(calculateTax(1000, 0.18))
let numbers = [1,2,3,4,5,6]
let sum = 0
function sumrsArray(numbers){
    for(let index = 0; index<numbers.length;index++){
        sum = sum + index
    } 
    return sum

}
console.log(sumrsArray(numbers))