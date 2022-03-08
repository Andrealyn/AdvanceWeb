const random = [1, 2, 3, 4, 5];

let multiply = "";
random.forEach(myFunction);
document.getElementById("aiteration").innerHTML = multiply;

function myFunction(value, index, array) {
  multiply += value * 10 + "<br>"; 
}