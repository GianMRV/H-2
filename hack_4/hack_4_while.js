/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */

let result = [];
let i = 0;
while (i < 4){
    result[i] = 2 * i + 1;
    i++;
}

console.log(result)

//export result
module.exports = result;