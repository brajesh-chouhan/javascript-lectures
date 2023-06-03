// console.log("hello javlecture2 ");

// let a = 10;
// var b = 20;
// const c = 30;

// console.log(a, b, c);
var a = 10;
console.log("a", a);

{
  //block scope
  var b = 20;
  let c = 30;
}

console.log("b", b);
//console.log("c", c);

for (var i = 0; i < 5; i++) {}
console.log(i);

//function scope
function fun1() {
  var result = 10 + 20;
  console.log(result);
}
fun1();
//console.log(result); error result udefine
