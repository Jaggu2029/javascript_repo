console.log(null < 0)
console.log(null == 0)
console.log(null >= 0) // here value is true bcoz comparisions convert null to a number treating it as a 0
console.log(null<=0)  // here also same reason
 

// double equal works differently

//=== triple equal it also check data type
console.log("2"==2) // true
console.log("2"===2) // false

//node 01_basics/L3_conversions.js