const express = require('express') 
// const mongoose = require('mongoose')
const React = require('react')
const jsxEngine = require('jsx-view-engine')
const app = express()
app.use(express.urlencoded({ extended: true }))
// mongoose.connect(process.env.MONGO_URI)
// mongoose.connection.once('open', () => {
//     console.log('connected to MONGO')
// })

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

/* routes */

//GREETING
app.get('/greeting', async (req, res) => {
    res.send(`Hello, stranger`)
})

app.get('/greeting/:name', async (req, res) => {
    res.send(`Hello, ${+req.params.name}!`)

})

//TIP
app.get('/tip/:total/:tipPercentage', async (req, res) => {
    const total = req.params.total * .01
    const tipPercentage = req.params.tipPercentage
    const tip = total * tipPercentage
    res.send(`The tip should be ${tip}!`)
})

//MAGIC 8 BALL
app.get('/magic/:question', async (req, res) => {
    const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let question = req.params.question
    let response = Math.floor(Math.random() * eightBall.length) + 1
    res.send(`${question}? Magic 8 Ball says... ${eightBall[response]}!`)
})

//FIBONACCI
app.get('/fibonacci/:num', async (req, res) => {
    let num = req.params.num
    let fibonacci = 1
    let addends1 = 1
    let addends2 = 1
    while (num > fibonacci) {
        fibonacci = addends1 + addends2
        addends1 = addends2
        addends2 = fibonacci
        if (num == fibonacci) {
            res.send(`Very good. ${num} is fibonacci.`)
        } else if (num <= fibonacci && num !== fibonacci) {
            res.send(`I can tell ${num} is not a fibonacci number.`)
        }
    }
})

app.listen(3000, () => {
    console.log('I\'m listening!')
})

/* 
THEORETICAL HW:
#1
function wordOccurrence(word, phrase){
    let result = 0
    const array  = phrase.split(' ')
    for(let i = 0; i < array.length; i++){
        if(word.toLowerCase() === array[i].toLowerCase()){
        result++;
        }
    }
    return result
}
The worst case time complexity for wordOccurence() is O(n) because the for loop and the .split()--which, to my understanding, must also iterate through the entire string--are both linear and their value can change depending on the length of the input. 


#2
function bubble_sort(list){
    for(let i = 0; i < list.length - 1; i++){
        for(let j  = 0; j < list.length - 2; j++){
            if(list[j+1] < list[j]){
                const temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
    return list;
}
The worst case time complexity for bubble_sort() is O(n^2) because for each iteration of the outer for loop must also iterate through a second for loop--thus, if the input changed, the consequential change in time would be exponential.


#3
function factorial(n){
    if(n === 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
The worst case time complexity for factorial() is O(1), or constant, because the time of the algorithm will not change with a change in input; it will always simply run the if{}else{} block the same way regardless of the length of the input.


#4
function bobIsFirst(people){
    return people[0] == 'bob'
}
The worst case time complexity for bobIsFirst() is O(1), or constant, because the time of the algorithm will not change with a change in input, since it is always changing the nbame at index 0; it will not need to iterate through the entire array to find the data it is looking for, so it will run the same each time regardless of the length of the input.


#5
function isPalindrome(input){
    const stack = [];
    let output = "";
    for(let i = 0; i < input.length; i++){
        stack.push(input[i]);
    }
    while(stack.length){
        output += stack.pop();
    }
    return output == input
}
The worst case time complexity for isPalindrome() is the O(n) because the time it takes to iterate through the for and while loops is dependent upon the length of the input, but an increase in the input does not result in an double increase in the time, since the while loop is not nested in the for. 



#6
function sumOfDivisors(n){
    let result = 0;
    let i = 1;
    while(i < n){
        if( n % i == 0){
        result += i;
        }
        i++;
    }
    return result
}
The worst case time complexity for sumOfDivisors() is O(n) becasue the time of the while loop can change depending on the length of the input. It is not O(n^2), however, because the time needed to perform what is within the while loop is contant or O(1) and will not change depending on the length of the input.




#7
function printAllNumbersThenSumPairs(numArray){
    numArray.forEach((num)=>{
        console.log(num);
    });
    numArray.forEach((num, index)=>{
        if(index < numArray.length - 1){
        console.log(num + numArray[index+1])
        }
    });
}
The worst case time complexity for printAllNumbersThenSumPairs() is O(n) because the time it will take to perform the .forEach() commands will depend upon the length of the input. However, even though the function must perform a .forEach() command twice, the two commands are not nested and thus will not increase the time exponentially.



#8
function isPrime(num){
    if(num == 1 || num == 2){
        return false
    }
    for(let i = 2; i < num - 1; i++){
        if(num % i == 0){
        return false
        }
    }
    return true
}
The worst case time complexity for isPrime() is O(n).
*/