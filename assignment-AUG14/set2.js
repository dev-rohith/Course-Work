// function totalVolume(...arr){
//     let result = 0
//     for(let i of arr){
//         let inner=1
//         i.forEach(element => {
//            inner *= element
//         });
//         result += inner
//     }
//     return result
// }

// console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));

/* is robbingL */

// function progressDay(arr){
//     let result = 0
//     for(let i =0; i<arr.length; i++){
//          if(arr[i+1]>arr[i]){
//             result++
//          }
//     }
//     return result
// }

// console.log(progressDay([3,4,1,2]));

/* check if all
 */
// function allTruthy(...arg){
//     return arg.every((ele)=>ele?true:false)
// }
// console.log(allTruthy(5,3,2,4,4,3,0));

/* number to reverse
 */
// function reverseArr(arr){
//    return arr.toString().split('').reverse().map(ele=>parseInt(ele))
// }
// console.log(reverseArr(12324354657));

/* multiply
 */


// function multiplyNums(str){
//    return str.split(',').reduce((acc,cv)=>acc*cv)
// }
// console.log(multiplyNums('1,2,3,4'));

// square every digit

// function squareDigits(num){
//    return parseInt(num.toString().split('').map(ele=>ele**2).join(''))
// }

// console.log(squareDigits(3212));

// reverse words in string

// function reverseWords(str){
//     return str.split(' ').reverse().join(' ')
// }

// console.log(reverseWords('the sky is blue'));


// reverse and not 

// function reverseAndNot(num){
//    return num.toString().split('').reverse().join('')+num
// }
// console.log(reverseAndNot(123456789));


/*for large numbers we can't perform math convertion because i utf-8 encoding i solved this one but return type is string*/

//  ------------------------ rev ------------------

// function rev(num){
//     return Math.abs(num).toString().split('').reverse().join('')
// }

// console.log(rev(-122157));


// match last items 


