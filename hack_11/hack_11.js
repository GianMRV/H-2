/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */

let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];
result.push("h@ck");
var aux = parseInt(result.length);
for (let i in numberArray){
    if (numberArray[i] === 1){
        result[parseInt(i) + aux] = "one";
    }
    else if (numberArray[i] === 3){
        result[parseInt(i) + aux] = "three";
    }
    else if (numberArray[i] === 5){
        result[parseInt(i) + aux] = "five";
    }
    else {
        result[parseInt(i) + aux] = numberArray[i];
    }
}
result.push("h@ck")
var aux = parseInt(result.length);
for (let i in stringArray){
    if (i == 0){
        result[parseInt(i) + aux] = "f00";
    }
    else if (i == 1){
        result[parseInt(i) + aux] = "Bar";
    }
    else if (i == 2){
        result[parseInt(i) + aux] = "b@z";
    }
    else if (i == 3){
        result[parseInt(i) + aux] = "quX";
    }
    else if (i == 4){
        result[parseInt(i) + aux] = "3ch0";
    }
}
result.push("h@ck")

console.log(result)

//export result
module.exports = result;