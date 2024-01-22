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

// */
// const sampArr = "2000 10003 1234000 44444444 9999 11 11 22 123" ;
// // const sampArr = "56 65 74" ;

// const orderWeight = function(strng) {

//     strng = strng.split(/\s+/)
//     objArr = [];
//     // TODO 1 --> Create an array of objects from the string with keys: [[sumDigits], 'sumDigits','weight'] |Status: Complete|   
//     strng.map((weight) => {
//         let sumDigits = String(weight).split('').reduce((runningTotal,currDigit) => runningTotal+Number(currDigit),0);

//         objArr.push(new Object({'weight':weight ,'sumDigits':sumDigits,[sumDigits]:weight}))
//     });
    
//     let keys = [];
//     objArr.forEach((obj) => {
//         for (key in obj) {
//             if(key == 'sumDigits') {
//                 keys.push(obj.sumDigits);
//             }
//         }

//     });

//     uniqKeys = [...new Set(keys)];

//     let keyValPairs = {};
//     uniqKeys.forEach(uniqKey => {
//         keyValPairs[uniqKey] = [];
//         objArr.forEach(obj => {
//             for (key in obj) {
//                 if (key == uniqKey) {
//                     keyValPairs[uniqKey].push(obj[key])
//                 }
//             }
//         })
//     })

//     let finalArr = [];
//     for (key in keyValPairs) {
//         finalArr.push(keyValPairs[key])
//     }

//     return finalArr.flat().join(' ');

// }

// const obj =  orderWeight(sampArr);
// console.log(obj)

// // console.log(obj)


// ----------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------||Next Challenge||--------------------------//

/*
https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246


function ipsBetween(start, end){
  //TODO
}
Strat 1:
TODO: Build helper function that determines 256 mod SOME_NUMBER and quotient as some datatype : Likely an *object or array

Strat 2: 
 Option 1: Question: Can you take the whole number b-a to find the number between them by first converting the number to a base ten number
 Option 2: Can you take each number and subtract them by current base.
                -IPv4 has 4 octets in the form of d.c.b.a
*/
// 4294967295
const testIP = '255.255.255.255'

const ip1 = "20.0.0.10"
const ip2 = "20.0.1.0"

const ipRadixConverter = (ip) => {
    let ipArr = ip.split('.');
    let toPower = 4;

    return ipArr.map((num) => {
        toPower --;
        return num*256**toPower;
    }).reduce((acc, curr) => {
        return acc+curr;
    },0);  
};

function ipsBetween(start, end){
    return ipRadixConverter(end)-ipRadixConverter(start)
  }
console.log(ipsBetween(ip1,ip2));