 
/*
ARRAYS
*/

let newAray = [];

newAray.push(2, 3, 5, 7, 11, 17, 66, 78);


// Recorrer array con for----------------------------
// for(let i=0; i<newAray.length; i++){
//     console.log(newAray[i])
// }


//Recorrer array con for(i of array)---------------------
// for(let i of newAray){
//     console.log(i);
// }

//Recorrer arrar con Array.forEach((i)=>{
//    Instrucciones
//});
// newAray.forEach((i) =>{
//     console.log(i-1);
// });

//Ejercicio-----------------------------------------

// let names = ["Pedro", "Camila", "Pablo", "Mark"];
// let ages = [17, 21, 45, 19];


// const getName = (age)=>{
//     let index = 0;
//     for(let i = 0; i<ages.length; i++){
//         if(ages[i]==age){
//             index = i;
//             break;
//         } 
//     }
//     console.log(`la edad de ${names[index]} es: ${age}`);
// }

// getName(21)


//Array.map

// let data = newAray.map((item)=>{
//     if(item%item == 0 && item/1 == item){
//         return item
//     }
// })

// console.log(data)
//CONTINUAR


// let data = newAray.map((item)=>{
//         if(item%2 !=0){
//             return item
//         }
//     })
// console.log(data);

// newAray.filter((item)=> item%2 != 0 )

//TAREA
/* 
Qué son las promesas
Ejemplos
Cómo resolver una promesa con then catch y cn async await
*/

// function isPrimeNum(num){
//     for (var i = 2; i < num; i++) {
//         if (num%i==0){
//             return false;
//         }
//     };
//     return true;
// }
// console.log(isPrimeNum(4)) 