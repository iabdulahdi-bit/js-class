
function calculateProcurementCost(tonnageInKg , pricePerKg){

    return tonnageInKg * pricePerKg
}

// console.log(calculateProcurementCost(9,100))
// if(tonnageInKg<0||pricePerKg<0){
//     return `avlid input`
// }
// console.log(calculateProcurementCost(12,5))

const validateBuyerName = (buyerName)=>{
    if(typeof buyerName === "string" && buyerName.trim().length>=2){
        return true
    } else {
        return false
    }

    }
    // console.log(validateBuyerName("ahmed"))
    
    function checkUserAuthorization(role){
        switch(role) { 
        case `manager`:
            return  `procurement and sales`
       case `sales agent`:  
       return `sales only` 
       case `director`:
        return `view aggregation`
        default :
        return `null`
    }
    }
    // console.log(checkUserAuthorization(`manager`))
    

    let salesRecord = { 
        "ProduceName":"beans",
        "tonnage": 500,
       "buyName": "ahmed" , 
        "amountPaid": 1000,
        "salesDate": new Date("2025-10-1"),
       "isCreditSales": false
    }
    
    // console.log(salesRecord)
    salesRecord.branch =  "mango"
    // console.log(salesRecord)
    salesRecord.buyName = ("ali")
    salesRecord.isCreditSales = true
    // console.log(salesRecord)
    let produce = Object.keys(salesRecord)
    // console.log(produce)
    for(let key in salesRecord){
        // console.log(`${key},value:${salesRecord[key]}`)
    }

   let prudencePrice = [40,45,89,45,32]
   let total = 0
   for(let i= 0;i< prudencePrice.length;i++){
    total += prudencePrice[i]
    
    
    // console.log(total)
   }
//    console.log(total)
    if(total === 251){
        // console.log( `the price is logdden `)
    
    } 
//    7
    let weeklyTonnge = [1200,1500,980,2000,1100,1800,1300]
    let totalTonnge = 0 
    for(let index = 0; index < weeklyTonnge.length;index++){
        totalTonnge += weeklyTonnge[index]
    }
    // console.log(totalTonnge)
    let averageTonnge = totalTonnge/weeklyTonnge
    .length
    // console.log("total weekly tonnge",totalTonnge);
    // console.log("average daliy tonnge",averageTonnge)
    // 8
    function createSalesRecord(id,amount,isCreditSales){
        return{
            id : id,
            amount: amount,
            isCreditSALES: isCreditSales
        }
    }
// 9
let inventory = [
{name: 'Beans', tonnage: 500},
{name: 'Maize', tonnage: 0},
{name: 'G-nuts', tonnage: 300}

]
let firstItems = inventory[0]
// console.log(firstItems)