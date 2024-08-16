/* no1 --------------------------
 */
// function toArray(obj){
//     let result = [];
//     for(let i in obj){
//        result.push([i,obj[i]])
//     }
//     return result
// }
// console.log(toArray({ a:1, b:2}));

/* no 2 ------------------- */

// function indexMultiplier(arr){
//    return arr.reduce((acc,cv,i)=>{
//        return acc+cv*i
//    },0)
// }
// console.log(indexMultiplier([-3,0,8,-6]));

/* no3-------------------------- */

// function isSpecialArray(arr) {
//     let result
//   for (let i = 0; i < arr.length; i++) {
//     if ((i % 2 == 0 && arr[i] % 2 == 0) || (i % 2 == 1 && arr[i] % 2 == 1)) {
//       result = true;
//     } else {
//       return false;
//     }
//   }
//   return result
// }

// console.log(isSpecialArray([2,7,4,9,6,1,6,3]));

/* no4--------------------------- */

// function numberSum(arr){
//     let count = 0
//     for(let i=0;i<arr.length;i++){
//         if(typeof arr[i] == 'number'){
//             count += arr[i]
//         }
//     }
//     return count
// }

// console.log(numberSum([1,2,3,4,5,true]));

// no5------------------------------

// function matchLastItem(arr){
//     let concatedMatch = arr.slice(0,arr.length-1).join('')
//     if(concatedMatch == arr[arr.length-1]) return true
//     else return false
// }
// console.log(matchLastItem([8,'thunder',true,'8thundertrue']));

// No.6-------------------------------

// function removeDups(arr){
//     let result = [];
//     for(let i of arr){
//       if(!result.includes(i)){
//         result.push(i)
//       }
//     }
//     return result
// }

// console.log(removeDups(['John','Taylor','John']));

// no.7----------------------

// function addName(i,j,k){
//    i[j] = k
//    return i
// }

// console.log(addName({piano: 500},'brutus', 400));

// no.8--------------------------------------

// function keysAndValues(obj){
//     return [Object.keys(obj),Object.values(obj)]
// }

// console.log(keysAndValues({a:'apple',b:'microsoft',c:'google'}));

// no.9--------------------------------

// function afterYears(obj, n) {
//   const increase = Math.abs(n);
//   for (let i in obj) {
//     obj[i] += increase;
//   }
//   return obj;
// }

// console.log(
//   afterYears(
//     {
//       genie: 1000,
//       Joe: 40,
//     },
//     5
//   )
// );

// no.10---------------------------

// function nameScore(name) {
//     const scores = {
//         "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
//         "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
//         "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
//         "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23
//     };

//     let score = 0;
//     for (let char of name.toUpperCase()) {
//         score += scores[char] || 0; 
//     }

//     let result;
//     switch (true) {
//         case (score <= 60):
//             result = "NOT TOO GOOD";
//             break;
//         case (score <= 300):
//             result = "PRETTY GOOD";
//             break;
//         case (score <= 599):
//             result = "VERY GOOD";
//             break;
//         default:
//             result = "THE BEST";
//             break;
//     }

//     return result;
// }
// console.log(nameScore('YOU')) // very good
// console.log(nameScore('Matt')) // the best