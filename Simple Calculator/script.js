const display = document.querySelector('#input');
const buttons = document.querySelectorAll(".calc-button");
const buttonEqual = document.querySelector("#button-equals");
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

display.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }
});
