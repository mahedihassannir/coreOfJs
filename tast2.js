// 1 to 5 all the things are quiz.

// #1 What method would you use to convert a string to uppercase?

// let str = "javascript";
// console.log(str.toUpperCase());


// #2 How can you concatenate two strings in JavaScript?

// let str1 = "hello";
// let str = "javascript";
// console.log(str1 + " " + str)


// #3 What method can you use to find the index of a substring within a string?

// let str = "javascript";
// let subStr = "hello";
// console.log(str.indexOf(subStr));

// #4 Explain the difference between indexOf() and lastIndexOf() methods.

/**the different between indexOf() and the lastIndexOf() is indexOf this property calculate the whole index the given character and the lastIndexOf() is calculate the only last

example:
 let str = "javascript";
 console.log(str.lastIndexOf("j"));
 *
*/


// #5 How can you extract a substring from a string using the slice() method?
// let str = "javascript";
// console.log(str.slice(0,4))




// tasks

// #1 Write a function that takes a string as input and returns the length of the string.
// const func = (input) => {
//     const value = input.length;
//     return value;
// answer is 5
// };
// func("Jamia");

// #2 Write a function that takes two strings as input and concatenates them
// const func = (input1, input2) => {
//     const value = input1 + " " + input2;
//     return value;
//     // answer jamia mahedi
// };
// func("Jamia", "mahedi");

// #3 Write a function that takes a string and a character as input and counts the number of
// const func = (inp1, inp2) => {
//     let count = 0
//     for (let i = 0; i < inp1.length; i++) {
//         if (inp1[i] === inp2) {
//             count++
//         }
//     }

//     console.log(count)
// }
// func("hello world ll", "l")

// #4
// const func = (input) => {
//     const result = input.toUpperCase()
//     console.log(result)
// return result
// }
// func("javascript")

// #5
// const func = (input) => {
//     const result = input.toLowerCase();
//     console.log(result);
//     return result
// };
// func("JAVASCRIPT");


// #6
// const func = (input) => {
//     const result = input.split("").reverse().join("")
//     console.log(result);
// return result;
// };
// func("JAVASCRIPT");

// #7 Write a function that takes a string as input and returns the string with all vowels replaced by '*' character.
// const func = (input) => {
//     const vowelRegex = /[aeiou]/gi;
//     const result = input.replace(vowelRegex, "*");
//     console.log(result);
//     return result;
// };
// func("JAVASCRIPT");


// #8 Write a function that takes a string as input and checks if it is a palindrome (reads the same forwards and backwards).

// const func = (input) => {

//     const lowerCase = input.toLowerCase();

//     // Remove non-alphanumeric characters using a regular expression
//     const alphanumericStr = lowerCase.replace(/[^a-z0-9]/g, '');

//     const reverseStr = alphanumericStr.split('').reverse().join('')

//     console.log(alphanumericStr===reverseStr)
//     return alphanumericStr === reverseStr;


// };
// func('A man, a plan, a canal, Panama!');

// #9 Write a function that takes a string as input and removes all whitespace characters from it.

// const func = (input) => {
//     console.log(input.replace(/\s/g, ""))
// return input.replace(/\s/g, "")
// };
// func('j a v a s c r i p t');


// #10 Write a function that takes two strings as input and checks if the first string contains the second string as a substring.
// const func = (input1, input2) => {
//     const result = input1.includes(input2);
//     console.log(result)
//     return result
// };
// func('hello world', "world");



