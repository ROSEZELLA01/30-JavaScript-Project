const weight = document.querySelector("#weight")
const height = document.querySelector("#height");
const btn = document.querySelector("#calculate-button");
const result = document.querySelector("#result");
const category = document.querySelector(".category");
const colorCode = document.querySelector(".colorCode");


btn.addEventListener("click",(e)=>{
e.preventDefault();
const inputWeight = Number(weight.value);
const inputHeight = Number(height.value)/100;
const bmiFormula = inputWeight / (inputHeight ^ 2);
const BMI = parseFloat(bmiFormula.toFixed(2))

if (BMI < 18.5){
    result.textContent = `Your BMI is ${BMI} `;
    category.textContent = `Underweight`;
    colorCode.style.backgroundColor = "blue";
}
else if(BMI < 24.9){
    result.textContent = `Your BMI is ${BMI}  `;
    category.textContent = `Normal weight`;
    colorCode.style.backgroundColor = "green";
}
else if(BMI < 29.9){
    result.textContent = `Your BMI is ${BMI}  `;
    category.textContent = `Overweight`;
    colorCode.style.backgroundColor = "yellow";
}
else{
    result.textContent = `Your BMI is ${BMI}  `;
    category.textContent = `Obese`;
    colorCode.style.backgroundColor = "red";
}
 weight.value="";

 height.value="";

})

// Use conditional statements to categorize BMI:
// Below 18.5 → Underweight
// 18.5 to 24.9 → Normal weight
// 25.0 to 29.9 → Overweight
// 30.0 and above → Obese
// Update the UI
// Show the BMI value.
// Show the corresponding category.
// Optionally, use colors (green for normal, yellow for overweight, red for obese).