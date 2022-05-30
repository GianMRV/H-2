/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */

let arr = ["foo","bar","baz","qux","echo"];
let result = arr.slice(1,4);
for (let i in result){
    for (let j in result[i]){
        if (result[i][j] === "a"){
            result[i] = result[i].slice(0,j) + "@" + result[i].slice(parseInt(j) + 1)
        }
    }    
}
let aux = result[2].toUpperCase();
result.splice(2,1,aux)

console.log(result)

//export result
module.exports = result;