console.log("A2.2_CW");
console.log("---- ---- ---- ----");
console.log("exercise 1");

console.log("1.1");

let isRohitAge = 22;
let isRahul = 23;

let isRohitOlder = isRohitAge > isRahul;
console.log("Is Rohit older than Rahul ?", isRohitOlder);

console.log("---- ---- ---- ----");

console.log("1.2");

let isRohitYonger = isRohitAge < isRahul;
console.log("Is Rohit yonger than rahul ?", isRohitYonger);

console.log("---- ---- ---- ----");

console.log("---- ---- ---- -----");
console.log("1.3");

let romaage = 22;
let isRohitEqualRoma = isRohitAge === romaage;
console.log("Are Rohit and Roma of the same age ?", isRohitEqualRoma);

console.log("----- ----- ------ ------");
let ninaAge = 23;
let isNinaOlserOrSameRahul = ninaAge >= isRahul;

console.log("Is nina older or equal to rahul ? ", isNinaOlserOrSameRahul);

console.log("---- ---- ---- ----");
console.log("1.5");

let isNinaOlderOrSame = ninaAge >= isRohitAge;
console.log("is nins older or qeual to rohit ? ", isNinaOlderOrSame);

console.log("---- ----- ---- -----");
console.log("1.6");

let isRomaYongerOrsameNina = romaage <= ninaAge;

console.log("is roma yonger or equal to nina ? ", isRomaYongerOrsameNina);

console.log("---- ----- ----- ------");
console.log("Exercise 2");
console.log("--------- ----------- --------- ----------");
console.log("2.1");

let product1Price = 499;
let product2Price = 699;
let budget = 1199;
let totalPrice = product1Price + product2Price;
let areBothunderbuget = budget > totalPrice;
console.log(" Can i afford the two products ?", areBothunderbuget);

console.log("----- ------ ------ -------");
console.log("2.2");

let maths = 87;
let english = 33;
let science = 43;

let passingAverage = 60;

let avearage = (maths + english + science) / 3;

let isPass = passingAverage >= avearage;
console.log("Did I pass ?", isPass);

console.log("----- ------ ------ -------");
console.log("2.3");

let number = 50;

let isNumberDivisibleBy3 = number % 3 === 0;
let isNumberDivisibleBy7 = number % 7 === 0;

console.log("Divisible by 3?", isNumberDivisibleBy3);
console.log("Divisible by 7?", isNumberDivisibleBy7);
