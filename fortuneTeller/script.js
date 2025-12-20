const fortunes = [
  "Your cat will look very cuddly today.",
  "The weather will be nice tomorrow.",
  "Be cautious of your new neighbors.",
  "You will find a new hobby soon.",
  "It would be wise to avoid the color red today."
];

function getFortune() {
  const selectedFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  return selectedFortune;
}

const fortuneDisplay = document.getElementById("fortuneDisplay");
const getFortuneButton = document.getElementById("getFortuneButton");

getFortuneButton.addEventListener("click", () => {
  fortuneDisplay.textContent = getFortune();
});

// Display an initial fortune when the page loads
fortuneDisplay.textContent = getFortune();