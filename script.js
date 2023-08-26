/** @format */

let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      (string = ""), (document.querySelector("input").value = string);
    } else if (e.target.innerHTML == "%") {
      string = parseFloat(string) / 100;
      document.querySelector("input").value = string;
    }
    // else if (e.target.innerHTML == "%") {
    //   // Prompt the user to enter the percentage
    //   let percentage = parseFloat(prompt("Enter the percentage:"));

    //   // Calculate the percentage of the input number
    //   string = (parseFloat(string) * percentage) / 100;
    //   document.querySelector("input").value = string;
    // }
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
