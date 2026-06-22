let myname = "Youtube"
let anothername = myname
anothername = "pawan"
console.log(anothername)
console.log(myname)
// iski copy banti hai its a stack memory
// in stack memory it contains variables of primitive datatype

// Heap (Non primitive)

let userOne ={
    email1 : "p@gmail.com",
    upiid : "uwi"
}

let userTwo = userOne
userTwo.email1 = "chai@gmail.com"
console.log(userOne.email1)
console.log(userTwo.email1)
// its a heap memory means two (example here) objects are pointing in same dirn if changes made in one of them then it can be seen in both of them
// node 01_basics/L7_memory.js