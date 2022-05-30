/**
 * ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"]
 * 
 * anexar al array result los items con los indices impares
 * formula (n % 2 == 1) para obtener un indice impar
 * 
 * example =>
 * if(indice % 2 == 1){
 *   ...
 * }  
 * 
 * 
    output => ["bar","qux","octo","foobar"]   
 */

let arr = ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"];
let result = [];
let i = 0;
while (i < parseInt(arr.length/2)){
   result[i] = arr[2 * i + 1];
   i++;
}

console.log(result)

//export result
module.exports = result;