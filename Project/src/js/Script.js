window.onload = function () {
  nextWord();
};

function checkGuess(event) {
  event.preventDefault();
  const guess = document.getElementById('guess').value.toLowerCase();
  const word = document.getElementById('word').value.toLowerCase();

  if (guess === word) {
    const correctModal = new bootstrap.Modal(document.getElementById('correctModal'));
    correctModal.show();

    const correctModalElement = document.getElementById('correctModal');
    correctModalElement.addEventListener('hidden.bs.modal', () => {
      nextWord();
    }, { once: true });
  } else {

    const incorrectModal = new bootstrap.Modal(document.getElementById('incorrectModal'));
    incorrectModal.show();
  }
}
const words = ["windows", "morning", "tie", "fall", "lion"];
let currentIndex = 0;

function nextWord() {
  if (currentIndex >= words.length) {
    currentIndex = 0;
  }
  const newWord = words[currentIndex];
  currentIndex++;
  document.getElementById("word").value = newWord;
  document.getElementById("guess").value = "";

  if (newWord === "windows") {
    document.getElementById("img1").src = "../src/images/Microsoft.jpg";
    document.getElementById("img2").src = "../src/images/Skyscrapper.jpeg";
    document.getElementById("img3").src = "../src/images/Glass.jpeg";
  } else if (newWord === "lion") {
    document.getElementById("img1").src = "../src/images/Jungle.jpg";
    document.getElementById("img2").src = "../src/images/crown.jpg";
    document.getElementById("img3").src = "../src/images/meat.jpg";
  } else if (newWord === "morning") {
    document.getElementById("img1").src = "../src/images/Coffe.jpg";
    document.getElementById("img2").src = "../src/images/Sun.jpg";
    document.getElementById("img3").src = "../src/images/Phone.jpg";
  } else if (newWord === "tie") {
    document.getElementById("img1").src = "../src/images/tie.jpg";
    document.getElementById("img2").src = "../src/images/rope tie.jpeg";
    document.getElementById("img3").src = "../src/images/race tie.png";
  } else if (newWord === "fall") {
    document.getElementById("img1").src = "../src/images/falling.jpg";
    document.getElementById("img2").src = "../src/images/fall.jpg";
    document.getElementById("img3").src = "../src/images/pumpkin.jpg";
  }


  const newWordModal = new bootstrap.Modal(document.getElementById('newWordModal'));
  newWordModal.show();
}


