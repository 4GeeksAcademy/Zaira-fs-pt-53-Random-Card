/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateRandomCard();

  const generateButton = document.getElementById("getNewCard"); //to get a reference to the existing button element in HTML

  generateButton.addEventListener("click", generateRandomCard); //adding event listener to get new card when clicked

  setInterval(generateRandomCard, 10000); // Generate a new card every 10 seconds
};

function generateRandomCard() {
  const suits = ["♦", "♥", "♠", "♣"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  // Randomly select a suit and value index
  const suitIndex = Math.floor(Math.random() * suits.length);
  const valueIndex = Math.floor(Math.random() * values.length);

  // Get the random suit and value based on the indices
  const randomSuit = suits[suitIndex];
  const randomValue = values[valueIndex];

  //referencing the HTML element with the id "card" from the document.
  const cardElement = document.getElementById("card");

  // replace the entire content of the element with a new HTML structure by inserting divs using backticks ``.
  cardElement.innerHTML = `<div id="topSuit">${randomSuit}</div>
                            <div id="cardValue">${randomValue}</div>
                            <div id="bottomSuit">${randomSuit}</div>`;

  // Set the class of the card and suits in css
  cardElement.className = `card ${randomSuit}`;
}
