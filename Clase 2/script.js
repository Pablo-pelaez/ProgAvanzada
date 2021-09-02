// let number = 12345;
// let dM = number%10;  //-----
// let aux1 = parseInt(number/10);
// let uM = aux1%10; //-------
// let c = parseInt(aux1/10) % 10; //------
// let d = parseInt(aux1/100) % 10
// let u = parseInt(aux1/1000) % 10
// //pruebas
// console.log("" + dM + uM+ c+ d + u);

//-------------------------------------------------------

let number = 24689;



//console.log(invertedNumber);

function reverseNumber(number) {
    let invertedNumber = "";

    if(number > 0){
        while (number > 0) {
            invertedNumber += number % 10;
            number = parseInt(number / 10);
        }
        return invertedNumber;
    }
    else{
        while (number > 0) {
            invertedNumber += number % 10;
            number = parseInt(number / 10);
        }
        invertedNumber *= -1;
        return invertedNumber;
    }
    
}

let invertedNumber = reverseNumber(-4533);
console.log(invertedNumber);

// const prueba = (paramtetro) => {
//     //------------
// }