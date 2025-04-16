window.onload = function () {
  if (document.getElementById("word")) {
    nextWord(false);
  }
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
const words = ["windows", "morning", "tie", "fall","candy", "lion", "sports", "clothes", "seasons", "history"];
let currentIndex = 0;

function nextWord(showModal = true) {
  if (currentIndex >= words.length) {
    currentIndex = 0;
  }
  const newWord = words[currentIndex];
  currentIndex++;
  document.getElementById("word").value = newWord;
  document.getElementById("guess").value = "";

    document.getElementById("img1").src = "../src/images/"+newWord+"1.jpg";
    document.getElementById("img2").src = "../src/images/"+newWord+"2.jpg";
    document.getElementById("img3").src = "../src/images/"+newWord+"3.jpg";


  if (showModal) {
    const newWordModal = new bootstrap.Modal(document.getElementById('newWordModal'));
    newWordModal.show();
  }
}


