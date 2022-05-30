/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */

let result = [];
let i = 0;
while (i < 4){
    result[i] = 2 * i + 1;
    i++;
}
result.reverse();

console.log(result)

//export result
module.exports = result;