//B1
//A= 1+2+3+3...+n
//C1
// let n = +prompt("Nhập n");
// let sumA = 0;
// let isValidn = true;
// if(Number.isNaN(n) === true){
//     console.log("error");    
// }
// else{
//     for (let i = 1; i <= n; i = i + 1){
//     sumA=sumA + i;
// }
//     console.log(sumA);}
//
//C2
// let n = prompt("Nhập n");
// let sumA = 0;
// let isValidn = true;
// if(Number.isNaN(n) === true || n.trim() === ""){
//     console.log("error"); 
// }
// else{
//     for (let i = 1; i <= n; i = i + 1){
//     sumA=sumA + i;
// }
//     console.log(sumA);}


//B2
// 0 + 5 + 10 + 15 + .... n
// let n = +prompt("nhập n");
// let sumA = 0;
// let isValidn = true;
// if(Number.isNaN(n) === true){
//     console.log("error");
// }else {
//     for (let i = 0; i <= n; i = i + 1){
//         sumA=sumA+i;
//         if(i%5){
//             console.log(i+` là số không chia hết cho 5`);
//         }
//         else{
//             console.log(i+` là số chia hết cho 5`)
//         }
//     }
// }

//B3
// 1 + 3 + 5 + 7 + .... (2n-1)
//c1:
// let n = +prompt("nhập n");
// let sumA = 0;
// let isValidn = true;
// if(Number.isNaN(n)===true){
//     console.log("error");
// }else {
//     for(let i = 0; i <= n; i = i + 1){
//         if(i%2){
//             console.log(sumA = sumA + i);
//         }
//         else{
//             console.log(``);
//         }
//     }
// }

//c2:
// let n = +prompt("nhập n");
// let sumA = 0;
// let isValidn = true;
// if(Number.isNaN(n)===true){
//     console.log("error");
// }else {
//     for(let i = 1; i <= 2*n - 1 ; i = i + 2){
//             sumA = i;
//     }
//     console.log(sumA);
// }


//B4:
// 2 + 4 + 6 + 8 + .... 2n

// let n = +prompt("nhập n");
// let sumA = 0;
// let isValidn = true;
// if(Number.isNaN(n)===true){
//     console.log("error");
// }else {
//     for(let i = 2; i <= 2*n; i = i + 2){
//             sumA = i;
//     }
//     console.log(sumA);
// }

//B5: 

// let soChan = 0;
// let soLe = 0;

// for (let i = 1; i <= 7; i = i + 1){
//     let n = +prompt(`Nhập số nguyên thứ ${i}: `);
    
//     if (Number.isNaN(n) || !Number.isInteger(n) ){
//         console.log("error");
//         i = i - 1;
//     }
//     else {
//     if(n%2===0){
//         soChan = soChan + 1;
//     }else{
//         soLe = soLe + 1;
//     }
// }
// }
// console.log(`Có ${soChan} số chẵn`);
// console.log(`Có ${soLe} số lẻ`);


//B6


// let n = +prompt("nhập n");
// let sumA = 0;

// if(Number.isNaN(n) === true || Number.isInteger(n) === false){
//     console.log("error");
// }else {
//     for (let i = 0; i <= n; i = i + 1){
//         sumA=sumA+i;
//         if(i % 5 === 0 && i % 3 === 0){
//             console.log(i + `fizzBuzz`);
//         } 
//         else if(i % 3 === 0){
//             console.log(i + `Fizz`);
//         }
//         else if(i % 5 === 0){
//             console.log(i + `Buzz`);
//         }
//         else{
//             console.log(i + ``)
//         }
//     }
// }

//B7
// let n = +prompt("nhập n");
// let sumA = 0;

// if(Number.isNaN(n) === true || Number.isInteger(n) === false){
//     console.log("error");
// }
// else{
//     for(let i = 1; i <= n; i = i + 1){
//         if(n%i===0){
//             console.log(`${n} chia hết ${i}`);
//         }
//         else{
//             console.log(`${n} không chia hết ${i}`);
//         }
//     }  
// }


//B8
// let n = +prompt("nhập n");
// let sumA = 0;


// if(Number.isNaN(n) === true || Number.isInteger(n) === false || n<2){
//     console.log("error");
// }
// else{
//     let isPrime = true;
//     for(let i = 2; i <= Math.sqrt(n); i = i + 1){
//         if(n % i === 0){
//             isPrime = false;
//             break;
//         }
//     }  
//     if (isPrime) {
//         console.log(`${n} là số nguyên tố`);
//     } 
//     else{console.log(`${n} không là số nguyên tố`);
// } 
// }

//B9
// let text;
// for(let i=0; i <10; i=i+1){
//     text= Math.random();
//     console.log(text);
// }
