let a4 = 20;
let b4 = 2;

let c4 = a4 + b4; //Addition
let d4 = a4 - b4; //Subtraction
let e4 = a4 * b4; //Multiplication
let f4 = a4 ** b4; //Exponentiation
let g4 = a4 / b4; //Division
let h4 = a4 % b4; //Modulus

//Increment
let x4 = 21;
x4++;
i4 = x4; 
//Decrement
let y4 = 100;
y4--;
j4 = y4;

document.getElementById("arithmetic").innerHTML = 
"[a:20, b:2, x:21, y:100] Addition(a+b) = " + c4 + ", " +
" Subtraction(a-b) = " + d4 + ", " +
" Multiplication(a*b) = " + e4 + ", " +
" Exponentiation(a**b) = " + f4 + ", " +
" Division(a/b) = " + g4 + ", " +
" Modulus(a%b) = " + h4 + ", " +
"Increment(x++) = " + i4 + ", " +
" Decrement(y--) = " + j4;