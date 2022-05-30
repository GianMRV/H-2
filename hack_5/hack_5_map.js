/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */

let aux = [];
for (let i = 0; i < 4; i++){
    aux[i] = i;
}
let result = aux.map(function(i){
    return 2 * i + 1;
}).reverse()

console.log(result)

//export result
module.exports = result;