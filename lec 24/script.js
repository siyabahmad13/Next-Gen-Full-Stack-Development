// NEX GEN FULL STACK DEVELOPMENT COURSE
// Lec 22 CondItional Statements


// let age = 14

// if (age >= 18){
//     console.log("you are an adult")
// }
// else {
//     console.log("you are a miner")
// }


let temp = 35;

if (temp > 30){
    console.log("its hot")
}




let marks = 30

if (marks >= 90){
    console.log("A+")
}
else if (marks >= 80){
    console.log("A")
}
else if (marks >= 70){
    console.log("B")
}
else if (marks >= 60){
    console.log("C")
}

else {
    console.log("fail")
}



let a = 95

if (a >= 50){
    console.log("HELLO")
}
else if (a >= 90){
    console.log("bye")
}



// let age = 20
// let hasID = true

// if(age >= 18 || hasID){
//     console.log("you can vote")
// }
// else{
//     console.log("you cannot vote")
// }


let islogin = false

if (!islogin){
    console.log("please login")
}




// let ag = 18
// let hasId = true
// let isVip = true

// if ((ag >= 20 && hasId) || isVip){
//     console.log("entry allowed")
// }



// let age = 20
// let hasTicket = false

// if (age >= 18){

//     if(hasTicket){
//         console.log("you can enter")
        
//     }
//     else{
//             console.log("you need a ticket")
//         }
// }


let age = 14



let result = age >=18 ? "adult" : "minor"

console.log(result)



let userName = ""

if (userName){
    console.log("username exist")
}
else{
    console.log("please enter your name")
}