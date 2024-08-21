let string = "";
const container = document.querySelector(".container");
const container1 = document.querySelector(".container1");
const buttons = container1.querySelectorAll(".items");
Array.from(buttons).forEach(function (buttons) {
  buttons.addEventListener(
    "click",
    function (e) {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        const result = document.querySelector(".result");
        result.value = string;
      } else if (e.target.innerHTML == "CE") {
        string = "";
        const result = document.querySelector(".result");
        result.value = string;
      } else {
        string = string + e.target.innerHTML;
        const result = document.querySelector(".result");
        result.value = string;
      }
    },
    false
  );
});
