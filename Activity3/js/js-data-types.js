//JavaScript evaluates expressions from left to right. Different sequences can produce different results:
let x1 = "Delta" + 10 + 1;
let y1 = 10 + 1 + "Delta";
document.getElementById("datatypes").innerHTML = x1 + " and " + y1;