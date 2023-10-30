/*
A. Take a sentence as an input and reverse every word in that sentence.
    a. Example - This is a sunny day > shiT si a ynnus yad.
*/
// 1st method
function reverseStringWords(str){
    let n = str.length;
    let strArr = str.split(" ");
    let ans = [];
    for(let word of strArr){
        // in this for loop we are working word by word
        let reverseWord = "";
        for(let j=0; j<word.length; j++){
            // int his for loop we are reversing charator of every word and adding it 
            // another variable which is reverseWord
            reverseWord = word.charAt(j) + reverseWord;
        }
        // pushing that reverseWord into ans array..
        ans.push(reverseWord);
    }
    return ans.join(" ");
}
let str = "This is a sunny day";
let result = reverseStringWords(str);
console.log(result);



// 2nd method
function reverseString(str, saparator){
    return str.split(saparator).reverse().join(saparator)
}
let string = "This is a sunny day";
// first reverse entire string without space..// yad ynnus a si sihT
let reversedString = reverseString(string, "");
// second time we will reverse output string with space...//sihT si a ynnus yad
let reverseWordOfString = reverseString(reversedString, " ");
console.log(reverseWordOfString);



// 3rd method using map
let myString = "This is a sunny day";
let arrString = myString.split(" "); // made a word array here
let reversedWordArr = arrString.map((word) => {
    // below we made charactor array then reversed it and then made it string again..
    return word.split('').reverse().join('');
})

console.log(reversedWordArr.join(" "));