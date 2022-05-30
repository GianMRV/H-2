/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */

let result = [];
for (let i = 0; i < 4; i++){
    result[i] = 2 * i + 1;
}
result.reverse();

console.log(result)

//export result
module.exports = result;