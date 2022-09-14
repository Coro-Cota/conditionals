let tinyNum = 5
let hugeNum = 200000


// 1. Given the following code, what will I see in the terminal? Write it out.

if(tinyNum > hugeNum){
    console.log("I am a teeny tiny number")
} else {
    console.log(`I am a huge number, my value is ${hugeNum}`)
}

// --------------------------------------------
// I am a huge number, my value is 200000
// --------------------------------------------

// 2. Given the following code, what will I see in the terminal? How many times?

for(let i = 0; i < tinyNum; i++){
    console.log("I am a teeny tiny number")
}

// --------------------------------------------
// 5 times, because console.log writes at 0
// --------------------------------------------

// 3. Given the following code, what will I see in the terminal? Why?

let myNum = 15

if(myNum % 5 === 0){
    console.log("I am divisible by 5")
} else if (myNum % 3 === 0){
    console.log("I am divisible by 3")
} else if(myNum % 5 === 0 && myNum % 3 === 0){
    console.log("I am divisible by 3 and 5")
}

// --------------------------------------------
// you will see i am divisble by 5 because it met the criteria of first if statement and it didn't move on to the else statements
// --------------------------------------------

// 4. Given the following code, what will I see in the terminal?

let superNum = 25

if(superNum < 50){
    superNum *= 5
} else if(superNum > 75){
    superNum -= 15
}

if(superNum < 150 && superNum > 75){
    superNum /= 25
} else {
    superNum += 5
}

for(let i = 0; i < superNum; i++){
    console.log(i)
}

// --------------------------------------------
// 0
// 1
// 2
// 3
// 4
// this is because the math results in 5 and the for loop increments starting at 0
// --------------------------------------------

// 5. Given the following code, what will I see in my terminal?

let words = ["purple","blue","orange","green","yellow"]

let colorStr = "Some colors I like are "

for(let i = 0; i < words.length; i++){
    if(i % 2 && i != 0 && i != words.length){
        colorStr += `${words[i]}, `
    } else if(i === words.length){
        colorStr += `and ${words[i]}.`
    }
}

console.log(colorStr)

// --------------------------------------------
// Some colors I like are blue, green,
// --------------------------------------------