let prodectSales =[
    {
id: 234,
dealerName: "ali",
produceType: "beans",
tonnageInKgs: 150,
costInUgx: 1000,
procurementDate: new Date (`2025-10.5`)
},
{
id: 34,
dealerName: "ahmed",
produceType: "apple",
tonnageInKgs: 100,
costInUgx: 500,
procurementDate: new Date (`2025-15-9`)
},
{
id: 111,
dealerName: "adam",
produceType: "banana",
tonnageInKgs: 300,
costInUgx: 900,
procurementDate: new Date (`2025-11.5`)
},






]

// let prodectSalesMap = prodectSales.map((sales) => {
//     // return sales.costInUgx*sales.tonnageInKgs

// });
    


    // console.log(prodectSalesMap)
    let filterprodectSales = prodectSales.filter((prodect)=>prodect.costInUgx === 1000)
        

    
console.log(filterprodectSales)
let prodectSalesReduce = prodectSales.reduce((total, sale)=>{
    return total + sale.tonnageInKgs
},0)
console.log(prodectSalesReduce)

const getUniqueDealers = new Set(["apple","orange","beans","apple"])
console.log(getUniqueDealers)
// 6
const authorizedRoles =  new Set([`manager`,`director`])

function isAuthorizedForProcurement(userRole) {
    return authorizedRoles.has(userRole)
}
isAuthorizedForProcurement(`manager`)
console.log(isAuthorizedForProcurement(`manager`))
console.log(isAuthorizedForProcurement(`employemnt`))
 
// 7
const kglPriceList ={ 

    'Beans': 5500,
'Grain Maize': 4800,
'Cow peas': 6000,
'G-nuts': 7200

}
// 8
function calculateSaleTotal(item ,kilograms){
    
        return total = kilograms[item]*kilograms
    } 


console.log(calculateSaleTotal("Beans",5))