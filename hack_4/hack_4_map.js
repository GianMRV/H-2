/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */

let aux = [];
for (let i = 0; i < 4; i++){
    aux[i] = i;
}
let result = aux.map(function(i){
    return i * 2 + 1;
})

console.log(result)

//export result
module.exports = result;