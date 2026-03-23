function checkCharacter() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const score = document.getElementById("score").value;

  let output = document.getElementById("output");

  if (name === "" || age === "" || score === "") {
    output.innerText = "Ekki er búið að fylla alla reiti";
    return;
  }

  const agenum = Number(age);
  const scorenum = Number(score);
  if (agenum < 18) {
    output.innerText = "Of ung/ungur til að spila";
    return;
  } else if (scorenum > 80 && agenum >= 18) {
    output.innerText = "Pro";
    return;
  } else if (scorenum > 50 && scorenum <= 80) {
    output.innerText = "Normal";
    return;
  } else if (scorenum <= 50) {
    output.innerText = "Beginner";
    return;
  } else {
    output.innerText = "Ekki er búið að fylla alla reiti";
    return;
  }
}
