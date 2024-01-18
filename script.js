/*
https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. 

***The weight of a number will be from now on [the sum of its digits.]***
        For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed.

//----------------Strategy------------------------//

1)Take the string and split it into an array with strng.split(' ');
2)The Goal is to use the sum of the digits of each weight as the ordering method for the weights:
    We can do this by:
        a) Create a new array with a one to one mapping where each index contains the sum
            i. We can join the two arrays so that there is a comma delimter
            ii. Sort the array, and split each element by comma returning the weights 
        b) Create an object where each is the value weight and sum of digits is the key
            i. Now we can take the sum of digits and sort them and call the weight using the key
        c) Take each element of an array as a property: weight : someNumber and create an array of objects
            *i. create a new property in each object for the sum of digits
                [12,14,15,21] --> = [{weight:12, sumDigits:3},{weight:14, sumDigits:5},{weight:15, sumDigits:6},{weight:21,sumDigits:3}]
                ***Problem with this solution is the sumDigits will have duplicates

//----------------Sample Tests-------------------//

const { assert } = require('chai');

describe("Order Weights",function() {
  it("Basic tests",function() {
    assert.strictEqual(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
    assert.strictEqual(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
  })
})

//----------------Boilerplate Code--------------//

function orderWeight(strng) {
    // your code
}

*/
const o = {
    'weight': 120,
    'sumDigits': 3,
    '3':120
}
const sampArr = "56 65 74 100 99 68 86 180 90" ;
// const sampArr = "56 65 74" ;

const objCreator = function(arr) {

    arr = arr.split(' ')
    // TODO 1 --> Create an array of objects from the string with keys: [[sumDigits], 'sumDigits','weight'] |Status: Complete|   
    let objArr = arr.map((weight) => {
        let sumDigits = String(weight).split('').reduce((runningTotal,currDigit) => runningTotal+Number(currDigit),0);
        return new Object({'weight':weight ,'sumDigits':sumDigits,[sumDigits]:weight})
    });

    // TODO 2 --> Each unique sumDigits to be a key, with the value being an array of weights sorted alphabetically --> As property of obj labeled sumDigitsSorted
        // TODO 2a --> Create array of unique property values of SumDigits to be used as key |Status: Complete|
    const sumDigitsValue = objArr.map((obj) => obj.sumDigits);
    const uniqueSDV = [...new Set(sumDigitsValue)];
        // TODO 2b --> Create an array of objects, each object has 1 property: sumDigits with an array for the value:: {sumDigits: [11,1,18...]}
            const sameSum = {}
            uniqueSDV.forEach((key) => {
                sameSum[`${key}`] = [];
                objArr.forEach(obj => {
                    console.log(`${key}==${obj.sumDigits}`)
                    if (key == obj.sumDigits) {
                        sameSum[`${key}`].push(obj.weight);
                    }

                })
            })
            console.log(uniqueSDV);
            console.log(sameSum);
            // objArr.forEach(obj => {
            //     // console.log(obj.sumDigits == uniqueSDV[0]);
            //     uniqueSDV.forEach((key) => {
            //         console.log(`${obj.sumDigits}==${key}`)
            //         console.log(obj.sumDigits == key);
                    
            //     })
            // })


    // console.log(uniqueSDV)
    // TODO 3 --> Sort the keys in an array smallest to largest
    // TODO 4 --> create an array of the values from each sumDigitsSorted --> flatten the array --> ENDs


};

const obj =  objCreator(sampArr);

// console.log(obj)



