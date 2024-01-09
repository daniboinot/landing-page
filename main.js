function showInput() {
  const inputSection = document.getElementById("inputSection");
  inputSection.style.display = "block";
}

function saveSettings() {
  const username = document.getElementById("name").value;
  const focus = document.getElementById("focusInput").value;
  const backgroundImage = document.getElementById("backgroundSelect").value;

  document.getElementById("username").textContent = username || "User";
  document.getElementById("focus").textContent = focus || "Nothing specific";

  // Update background image
  document.body.style.backgroundImage = `url('${backgroundImage}')`;
  // Hide settings after saving
  const inputSection = document.getElementById("inputSection");
  inputSection.style.display = "none";

  localStorage.setItem("username", username);
  localStorage.setItem("focus", focus);
  localStorage.setItem("backgroundImage", backgroundImage);
}

function generateQuote() {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive for progress, not perfection. - Unknown",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = randomQuote;
}

window.onload = function () {
  generateQuote();
  const savedUsername = localStorage.getItem("username");
  const savedFocus = localStorage.getItem("focus");
  const savedBackgroundImage = localStorage.getItem("backgroundImage");

  document.getElementById("username").textContent = savedUsername || "User";
  document.getElementById("name").value = savedUsername || "";
  document.getElementById("focus").textContent =
    savedFocus || "Nothing specific";
  document.getElementById("focusInput").value = savedFocus || "";

  // Set the background image on page load
  document.body.style.backgroundImage = `url('${savedBackgroundImage}')`;
};
