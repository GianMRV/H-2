/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */

let result = [];
let i = 0;
while (i < 5){
    result[i] = i + 1;
    i++;
}
result.reverse();

console.log(result)

//export result
module.exports = result;