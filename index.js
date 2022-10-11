/*
//Ejercicio 1
const fs = require('fs');
fs.copyFileSync("file1.txt","file2.txt");
*/
/*
//Ejercicio 2
var fs = require('fs');
fs.readFile('file1.txt', 'utf8', function(err, data){
    console.log(data);
});
*/
/*
//Ejercicio 3
const fs= require('fs');
fs.writeFile("helloworld.txt","Hello Wordl!",function(err,data){
    console.log("Hello world!");
});
*/
//Ejercicio 4
const superheroes = require('superheroes');
console.log(superheroes.random());
//Ejercicio 5
const villain= require('supervillains');
console.log("Watch the ultimate battle of", superheroes.random(),"vs", villain.random());
