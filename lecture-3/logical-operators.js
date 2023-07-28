// ||,  $$, !
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //fals

console.log(1 || 0); //1, since 1 is truthy value its not even check the second

let username = prompt("enter your name");
console.log(username || "anonymous");

let height = 0;
console.log(height || 10); //10, becuse 0 is false value so we got  but i want height=0

// so their null colesen(??) was developed  ??only check  null,undefine for remain it assign value

let h = 0;
console.log(h ?? 10); //so now we got output as a 0
