/** @format */

let input = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      input = eval(input);
      document.querySelector("input").value = input;
    } else if (e.target.innerHTML == "C") {
      (input = ""), (document.querySelector("input").value = input);
    } else if (e.target.innerHTML == "%") {
      input = parseFloat(input) / 100;
      document.querySelector("input").value = input;
    }
    else if (e.target.innerHTML == "%..") {
      // Prompt the user to enter the percentage
      let percentage = parseFloat(prompt("Enter the percentage:"));

      // Calculate the percentage of the input number
      input = (parseFloat(input) * percentage) / 100;
      document.querySelector("input").value = input;
    }
    else {
      console.log(e.target);
      input = input + e.target.innerHTML;
      document.querySelector("input").value = input;
    }
  });
});
