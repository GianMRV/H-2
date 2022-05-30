/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
for (let i = 0; i < 4; i++){
    result[i] = 2 * i + 1;
}

console.log(result)

//export result
module.exports = result;