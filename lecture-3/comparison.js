// <, >, <=, =>, ==, !, !=    that all are comparison operatores
// output will always boolean value
console.log(2 > 1); //true
console.log(2 == 1); //false
console.log(2 != 1); // true   (!=is not)
console.log("Z>A", "z" > "a"); //true (because of ascii value)
console.log("2" > 1); // true  because string '2' get converted into number2

console.log(false == 0); //true (true=1, false=0)
console.log(false === 0); //false (now it was checking strict equality )so always use===

//********************so always use===*********************** *
console.log(null == undefined); //true
console.log(null === undefined); //false
