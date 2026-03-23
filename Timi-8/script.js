function sayHello() {
  let nameInput = document.getElementById("nameInput").value;
  document.getElementById("nameOutput").innerText = "Halló " + nameInput.value;
  if (nameInput === "") {
    document.getElementById("nameOutput").innerText =
      "Skrifaðu nafnið þitt fyrst!";
    return;
  }

  document.getElementById("nameOutput").innerText = `Halló ${nameInput}`;
}

function checkAge() {
  let ageInput = document.getElementById("ageInput").value;
  if (ageInput === "") {
    document.getElementById("ageOutput").innerText =
      "Þú verður að stimpla inn aldur";
    return;
  }

  if (ageInput <= 18) {
    document.getElementById("ageOutput").innerText = "Aðilinn er barn";
    return;
  }

  document.getElementById("ageOutput").innerText = "Aðilinn er fullorðinn";
}

function calculate() {
  let num1 = Number(document.getElementById("num1").value);
  let val = Number(document.getElementById("val").value);
  let num2 = Number(document.getElementById("num2").value);

  console.log(`num1: ${num1}, val: ${val}, num2: ${num2}`);

  switch (val) {
    case 1:
      calculation = num1 + num2;
      break;
    case 2:
      calculation = num1 - num2;
      break;
    case 3:
      calculation = num1 * num2;
      break;
    case 4:
      if (num2 === 0) {
        console.log("Getur ekki deilt með 0");
        return;
      }
      calculation = num1 / num2;
      break;
  }
  let output = document.getElementById("calculatorOutput");
  if (calculation < 0) {
    output.innerText = "Niðurstaða fer ekki neðar en 0";
    return;
  }
  output.innerText = "Niðurstaða: " + calculation;
}
