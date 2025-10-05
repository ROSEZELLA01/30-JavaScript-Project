const weight = document.querySelector("#weight")
const height = document.querySelector("#height");
const btn = document.querySelector("#calculate-button");
const result = document.querySelector("#result");


btn.addEventListener("click",(e)=>{
e.preventDefault();
const inputWeight = Number(weight.value);
const inputHeight = Number(height.value);
const bmiFormula = inputWeight / (inputHeight ^ 2);
const BMI = parseFloat(bmiFormula.toFixed(2))

if (BMI < 18.5){

}

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