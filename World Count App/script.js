// In JavaScript, split(/\s+/) is a method call on a string that divides the string into an array of substrings based on a regular expression pattern.
// Here's a breakdown:
// split(): This is a built-in JavaScript string method that splits a string into an ordered list of substrings, puts these substrings into an array, and returns the array.
// /\s+/: This is a regular expression (regex) used as the separator.
// /: These forward slashes denote the beginning and end of a regular expression literal.
// \s: This is a special character class in regex that matches any whitespace character. This includes spaces, tabs (\t), newlines (\n), carriage returns (\r), form feeds (\f), and vertical tabs (\v).
// +: This is a quantifier in regex that means "one or more" of the preceding element. In this case, it means one or more whitespace characters.
// In essence, split(/\s+/) means "split the string wherever there is one or more whitespace characters."

const inputTextArea = document.getElementById("text-input");
const countButton = document.getElementById("count-button");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");

function calculateChar() {
  countButton.addEventListener("click", (e) => {
    e.preventDefault();
    let words = inputTextArea.value;
    if (words === "") {
      alert("Enter valid text");
    } else {
      console.log(words.split(" ").join(""));
      // Split by whitespace and filter out empty strings
      const wordArray = words
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);
      console.log(wordArray);
      //   replace(/\s+/g, "") removes all whitespace characters
      charCount.textContent = words.replace(/\s+/g, "").length;
      wordCount.textContent = wordArray.length;
    }
  });
}
calculateChar();

// const inputTextArea = document.getElementById("text-input");
// const countButton = document.getElementById("count-button");
// const wordCount = document.getElementById("word-count");
// const charCount = document.getElementById("char-count");
// const readingTime = document.getElementById("reading-time");
// function calculateChar() {
//   countButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     let words = inputTextArea.value;
//     if (words === "") {
//       alert("Enter valid text");
//     } else {
//       console.log(words.split(" ").join(""));
//       console.log(words.split(/\s+/));
//       charCount.textContent = words.split(" ").join("").length;
//       wordCount.textContent = words.split(/\s+/).length;
//       readingTime.textContent = (words.split(/\s+/).length / 200).toFixed(2);
//     }
//   });
// }
// calculateChar();
