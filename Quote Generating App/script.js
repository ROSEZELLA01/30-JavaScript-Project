const quoteContainer = document.querySelector(".quote-container");
const button = document.querySelector("#newQuoteButton");


const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    text: "Do not watch the clock. Do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Opportunities don't happen, you create them.",
    author: "Chris Grosser",
  },
  { text: "Dream bigger. Do bigger.", author: "Anonymous" },
  {
    text: "It always seems impossible until it is done.",
    author: "Nelson Mandela",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },{
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },{
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },

];

 let index = 0;
 let newQuote = quotes[index];
 quoteContainer.innerHTML = `<p id="quoteDisplay">${newQuote.text}</p>
<p id="authorDisplay">${newQuote.author}</p>`;


const getQuote = () => {
   index = Math.floor(Math.random() * quotes.length);
  newQuote = quotes[index];
  quoteContainer.innerHTML = `<p id="quoteDisplay">${newQuote.text}</p>
            <p id="authorDisplay">${newQuote.author}</p>`;
};

button.addEventListener("click", getQuote);


