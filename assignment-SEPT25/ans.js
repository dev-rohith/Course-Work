// problem Number - 1

// function mean(num){
//     return num.toString().split('').reduce((acc,n)=>Number(acc)+Number(n))/num.toString().length
// }
// console.log(mean(666));

// problem Number - 2

// function missingNum(arr){
//     for(let i = 1;i<=10;i++){
//       if(!arr.includes(i)) return(i)
//     }
// }

// console.log(missingNum([7, 2, 3, 6, 9, 1, 4, 8, 5]));

// problem Number - 3

// function inBox(arr){
//     if(arr[0].includes('*') || arr[arr.length-1].includes('*')) return false
//     for(let i = 1; i < arr.length-1; i++){
//         if(arr[i].includes('*') && arr[i].indexOf('*') !== 0 && arr[i].lastIndexOf('*') !== (arr[i].length-1)) return true
//     }
//     return false
// }

// console.log(inBox(["###","#  * #","#   #","###"]));

// problem Number - 4

// function makeTitle(str){
//    return str.split(' ').map(ele=>ele[0].toUpperCase()+ele.slice(1)).join(' ')
// }

// console.log(makeTitle('This is a title'));

// problem Number - 4

// function equal(a, b, c){
//    if(a === b && a === c || b === a && b === c) return 3
//    if(a === b || a === c || b === c || b === a) return 2
//    return 0
// }

// console.log(equal(3, 2, 1));

// problem Number - 5

// function specialReverse(str,s){
//     return str.split(' ').map(ele=>{
//         if(ele[0] === s) return ele.split('').reverse().join('')
//         return ele
//         }).join(' ')
// }

// console.log(specialReverse('word searches are super fun','s'));


// problem Number - 5

// function hackerSpeak(str){
//     return str.toLowerCase().split('').map((ele)=>{
//         if(ele === 'a') return 4
//         if(ele === 'e') return 3
//         if(ele === 'o') return 0
//         if(ele === 's') return 5
//         return ele
//     }).join('')
// }

// console.log(hackerSpeak('javascript is cool'));


// problem Number - 6


// function capMe(arr){
    //     return arr.map(ele=>ele[0].toUpperCase()+ele.slice(1).toLowerCase())
    //  }
    
    //  console.log(capMe(['mavis', 'senaida', 'MABELLE', 'letty']));
    
    
// problem Number - 7

// function sumTwoSmallestNums(arr){
//     const sortedArray = arr.sort((a,b)=>a-b)
//     return sortedArray[0]+sortedArray[1]
// }

// console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));


// problem last

// function counterpartCharCode(char) {
//   if (char === char.toUpperCase()) return char.toLowerCase().charCodeAt();
//   return char.toUpperCase().charCodeAt();
// }

// console.log(counterpartCharCode("A"));
