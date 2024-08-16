// //test start set-1 -------------------------------------------------------------------

// function giveMeSomething(str){
//     return `something ${str}`;
// }
// const result = giveMeSomething("is better than nothing")
// console.log(result);

// const boolToString = (value) => {
//     if(typeof value === 'boolean'){
//         return ''+value
//     }
//     else{
//         return 'Given input is not a boolean'
//     }
// }
// const result = boolToString(true)
// console.log(result);

// function greeting(name){
//   return name.toLowerCase() === 'jack'? `Hello, my Love!`: `Hello, ${name}!`;
// }

// const result = greeting('jack');
// console.log(result);

// function comp(str1, str2){
//     return str1.length === str2.length?true:false;
// }
// const result = comp('designCodeTest', 'dct')
// console.log(result);

// function isEmpty(i){
//     if(i === ''){
//         return true
//     }
//     else{
//         return false
//     }
// }
// const result = isEmpty(``)
// console.log(result);

// function length(str){
//     if(str === ""){
//        return 0;
//     }
//     else{
//         return 1+length(str.slice(1));
//     }

// }
// const result = length('apple');
// console.log(result);

// function stringInt(str){
//     return parseInt(str)
// }
// const result = stringInt('600');
// console.log(result);

// function concatName(str1, str2){
//     return `${str2}, ${str1}`
// }
// const result = concatName('rohith', 'v')
// console.log(result);

// function oddOrEven(str){
//   return str.length%2==0?true:false;
// }
// const result = oddOrEven('rohith');
// console.log(result);

// function newWord(str){
//     return str.slice(1)
// }
// const result = newWord('dct');
// console.log(result);

// const helloName = (str) => `Hello ${str.toString()}!`
// const result = helloName('Ani sir');
// console.log(result);

// const arrayToString = (arr) => arr.join('');
// const result = arrayToString([1,2,'ok',3,true]);
// console.log(result);

// function word(str) {
//   switch (str.toLowerCase()) {
//     case "one":
//       return 1;
//     case "two":
//       return 2;
//     case "three":
//       return 3;
//     case "four":
//       return 4;
//     case "five":
//       return 5;
//     case "six":
//       return 6;
//     case "seven":
//       return 7;
//     case "eight":
//       return 8;
//     case "nine":
//       return 9;
//     case "zero":
//       return 0;
//   }
// }
// console.log(word('three'));

// function hasSpace(str){
//     if(str.includes(' ')){
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(hasSpace('hel lo'));

// function isLastCharacterN(str){
//     return str[str.length-1].toLowerCase() === 'n'?true:false;
// }
// console.log(isLastCharacterN('elon'));

// function firstLast(str){
//     if(typeof str === 'string'){
//         return `${str[0]}${str[str.length-1]}`
//     }
//     else{
//         return `input should be a string`
//     }
// }
// console.log(firstLast('dct'));

// function stutter(str) {
//     const s = str.slice(0, 2);
//   if (str.length === 1) { 
//     return `${s}... ${s}... ${str}`;
//   }
//   else{
//     return `${s}... ${s}... ${str}`;
//   }
// }
// console.log(stutter('rhghv'));

// function moodToday(mood){
//     if(mood){
//         return `Today, I am feeling ${mood}`
//     }
//     else{
//         return `Today, I am feeling neutral`
//     }
// }
// console.log(moodToday());

// /*Using default parameters[ES6]*/
// // function moodToday(mood = 'neutral'){
// //         return `Today, I am feeling ${mood}`
// // }
// // console.log(moodToday());

// function frontThree(str){
//     if(typeof str === "string"){
//         return str.length > 3 ? `${str.slice(0,3)}${str.slice(0,3)}${str.slice(0,3)}`:`${str}${str}${str}`;
//     }
//     else{
//         return `input should be string`
//     }
// }
// console.log(frontThree('dctacademy'));


// function countSyllables(str){
//     return Math.floor(str.length/2);
// }
// console.log(countSyllables("hehehehehe"));
  


// second set-2

// function repeatString(str,r){
//     if(typeof str === 'number'){
//         return "NOt A String !!"
//     }
//     else{
//         let result = ''
//         for(let i = r; i>0;i--){
//             result += str
//         }
//         return result
//     }
// }

// console.log(repeatString('dct',2));

// 2------------------------------------

// const ctoa = (char) => typeof char === 'string'?char.charCodeAt():'Input should be in form of string';
// console.log(ctoa('199'));

// 3-----------------------------

// function match(str1,str2){
//  return str1.toLowerCase() === str2.toLowerCase()?true:false;
// }

// console.log(match('hello','HelLo'));

// 4---------------------------------------------------

// function intOrString(char){
//     if(typeof char === "string"){
//         return "str"
//     }
//     else if(typeof char === "number"){
//         return "int"
//     }
//     else{
//         return "not Either"
//     }
// }
// console.log(intOrString(200));

// 5--------------------------------------

// function helloWorld(num){
//   if(num%3 === 0 && num%5 === 0){
//     return 'Hello World';
//   }
//   else if(num%3 === 0){
//     return 'Hello'
//   }
//   else if(num%5 === 0){
//     return 'Hello World'
//   }
// }
// console.log(helloWorld(30));

// 6------------------------------------------

// function longBurp(num){
//     let r = '';
//     for(let i=num;i>0;i--){
//         r += 'r'
//     }
//     return `Bu${r}p`
// }
// console.log(longBurp(1));

// 7-----------------------------------------

// function modifyLast(str, num){
//     let s = str;
//     for(let i=num; i>1; i--){
//         s += str[str.length-1]
//     }
//     return s
// }

// console.log(modifyLast('dct?', 5));

// 8-------------------------------

// function countDs(sentance){
//     let str = sentance.toLowerCase()
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         if(str[i].includes('d')) count++
//     }
//     return count
// }

// console.log(countDs('uwfgcguog8 aeiu7gsdyaggusuduisgafu uhhgjsjdhifgudhsuhfyugsdugf ga8sug sdg'));

// 9------------------------------------------

// function getCase(str){
//     if(str === str.toLowerCase()){
//         return "lower"
//     }
//     else if(str === str.toUpperCase()){
//         return "upper"
//     }
//     else{
//         return "mixed"
//     }
// }

// console.log(getCase('HHH'))

// 10-----------------------------------------

// function toSottishScreaming(sentance){
//     const str = sentance.toUpperCase()
//     let result = '';
//     for(let i=0;i<str.length;i++){
//         if('AEIOU'.includes(str[i])){
//             result += 'E'
//         }
//         else{
//             result += str[i]
//         }
//     }
//     return result
// }

// console.log(toSottishScreaming('mr. steeve. Good MORnIng bro'));

// 11--------------------------------------------------------

// function uploadCount(arr, mm){
//     let count = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].includes(mm)) count++
//     }
//     return count
// }
// console.log(uploadCount(['Sept 22','Oct 22','Sept 24','Sept 28'], 'Sept'));

// 12----------------------------------------------------------------

// function forbiddenLetter(char, arr){
//     return arr.every((arr)=>!arr.includes(char))
// }
// console.log(forbiddenLetter('i',[]));

// 13-------------------------------------------------------

// function countWords(str){
//     return str.split(' ').length
// }
// console.log(countWords('only coding and practice but no job'));

// 14----------------------------------------------------------------------

// function lettersOnly(sentance){
//     let str = sentance.toLowerCase()
//     let result = '';
//     for(let i=0;i<str.length;i++){
//         if(str[i].charCodeAt()>96 && str[i].charCodeAt()<122){
//             result += str[i]
//         }
//     }
//     return result
// }
// console.log(lettersOnly('rhohf=098-hhdsjbi'));

// 15 --------------------------------------------------------------

// function isIdentical(str){
//     if(str.length === 0){
//         return true
//     }
//    const firstChar = str[0];
//    for(let i=0; i<str.length; i++){
//     if(str[i] !== firstChar){
//         return false
//     }
//    }
//    return true
// }
// console.log(isIdentical('aaaaz'));

// 16-----------------------------------------------------------------

// function getExtension(arr){
//     const result = [];
//     arr.forEach(element => {
//        let subArr = element.split('.')
//        result.push(subArr[subArr.length - 1])
//     });
//     return result
// }
// console.log(getExtension(['code.html','s.js','ok.py']));

// 17---------------------------------------------------------------------

// function googlify(n){
//     if(n === 1 || n < 1){
//         return "invalid"
//     }
//     let o = ''
//     for(let i=n;i>0;i--){
//         o += 'o'
//     }
//     return `G${o}gle`
// }

// console.log(googlify(-1));

// 18---------------------------------------------------------------------------

// function repeat(str, n){
//     let result = '';
//     for(s of str){
//         result += s.repeat(n)
//     }
//     return result
// }

// console.log(repeat('ok',6));


// 19-----------------------------------------------------------------------------

// function checkPalindrome(str){
//     let reversedString = str.split('').reverse().join('');
//     if(str === reversedString) return true
//     return false
// }
// console.log(checkPalindrome('reviver'));

// 20--------------------------------------------------------------------------------

// function sameCase(str){
//     if(str === str.toLowerCase() || str === str.toUpperCase()){
//         return true
//     }
//     return false
// }

// console.log(sameCase('HELLO'));


// //       END              ////////////////