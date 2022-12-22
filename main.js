// JavaScript for playing the piano sounds
const keys = document.querySelectorAll(".key");
var notes = ["a", "w", "s", "e", "d", "f", "r", "g", "t", "h", "y", "j"];
var audio;
// for (let i = 8; i < 12; i++) {
//   console.log("Hello");
// }
var rate = document.getElementById("rate");
window.addEventListener("keydown", (event) => {
  if (event.key === 'ArrowLeft') {
    rate.value--;
  } else if (event.key === 'ArrowRight') {
    rate.value++;
  }
},)
keys.forEach((key) => {
  var note = key.dataset.note;
  if (note.split("").splice(1, 1)[0] === "s") {
    key.classList.add("black");
  }
  key.addEventListener("mousedown", () => {
    // Play the corresponding piano sound
    const audio = new Audio(`sounds/${note}.wav`);
    audio.playbackRate = rate.value;
    audio.preservesPitch = false;
    audio.currentTime = 0; // Rewind to the start of the sound
    audio.play();
  });
});

for (let i = 0; i < notes.length; i++) {
  var playNote = function (event) {
    if (event.key === notes[i]) {
      audio = new Audio(`sounds/${keys[i].dataset.note}.wav`);
      audio.playbackRate = rate.value;
      console.log(rate.value);
      audio.preservesPitch = false;
      audio.currentTime = 0; // Rewind to the start of the sound
      audio.play();
      keys[i].classList.add("keys");
    }
  };
  var endNote = function () {
    keys[i].classList.remove("keys");
    // audio.pause()
  };
  window.addEventListener("keydown", playNote);
  window.addEventListener("keyup", endNote);
  window.addEventListener("touchstart", playNote);
  window.addEventListener("touchend", endNote);
}
