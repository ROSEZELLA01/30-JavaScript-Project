const display = document.querySelector('#input');
const buttons = document.querySelectorAll(".calc-button");
const buttonEqual = document.querySelector("#button-equals");
const buttonClear = document.querySelector("#button-clear");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
       
    });
});

buttonEqual.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
});

buttonClear.addEventListener("click", () => {
display.value=""
})

display.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      display.value = eval(display.value);
    } else {
      display.value = key;
    }
    // if (event.key === "Enter") {
    //     try {
    //         display.value = eval(display.value);
    //     } catch (error) {
    //         display.value = "Error";
    //     }
    // }
});
